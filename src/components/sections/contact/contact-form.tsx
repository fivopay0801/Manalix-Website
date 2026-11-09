import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLanguage } from "@/context/language-context";
import { trackLeadGeneration } from "@/lib/analytics";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("[ContactForm] Submitting with data:", data);
    setLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const envServerUrl = (
        import.meta.env.VITE_SERVER_URL ||
        import.meta.env.VITE_API_BASE_URL?.replace(/\/api\/?$/, "") ||
        "https://cmedemo.fivopayunion.in"
      ).replace(/\/$/, "");

      const urlsToTry = Array.from(
        new Set([
          `${envServerUrl}/api/contact/submit`,
          "https://cmedemo.fivopayunion.in/api/contact/submit",
          "/api/contact/submit",
          "http://localhost:8000/api/contact/submit",
          "http://127.0.0.1:8000/api/contact/submit",
        ])
      );

      let resData = null;
      let lastError: any = null;

      for (const url of urlsToTry) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        try {
          console.log(`[ContactForm] Attempting POST to: ${url}`);
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          const json = await response.json().catch(() => null);
          if (response.ok && json?.success) {
            console.log(`[ContactForm] Success from ${url}:`, json);
            resData = json;
            break;
          } else {
            const msg =
              json?.message ||
              (Array.isArray(json?.errors) ? json.errors.join(", ") : null) ||
              `Server returned status ${response.status}`;
            throw new Error(msg);
          }
        } catch (err: any) {
          clearTimeout(timeoutId);
          console.warn(`[ContactForm] Error trying ${url}:`, err.message);
          lastError = err;
        }
      }

      if (!resData) {
        throw (
          lastError ||
          new Error("Could not connect to contact API. Please check your network or backend server.")
        );
      }

      toast({
        title: t.contact.successMsg || "Message sent successfully!",
        description:
          resData?.message ||
          "Our team has received your message and will connect within 24 hours.",
        variant: "default",
      });

      trackLeadGeneration({
        lead_type: "contact_demo_request",
        society_type: "general",
      });

      form.reset();
      setIsSuccess(true);
      setError(null);
    } catch (err: any) {
      console.error("[ContactForm] Final submission error:", err);
      const errMsg = err?.message || t.contact.errorMsg || "Failed to send message.";
      toast({
        title: "Submission Error",
        description: errMsg,
        variant: "destructive",
      });
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const onInvalid = (errors: any) => {
    console.warn("[ContactForm] Validation failed:", errors);
    const firstKey = Object.keys(errors)[0];
    const firstError = errors[firstKey];
    const errMsg = firstError?.message || `Please check ${firstKey}`;
    toast({
      title: "Please check form fields",
      description: errMsg,
      variant: "destructive",
    });
    setError(errMsg);
  };

  const isSubmitting = loading || form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider">{t.contact.firstName}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.firstName}
                    {...field}
                    className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider">{t.contact.lastName}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.lastName}
                    {...field}
                    className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider">{t.contact.email}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t.contact.email}
                  {...field}
                  className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider">{t.contact.phone}</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder={t.contact.phone}
                  {...field}
                  className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider">{t.contact.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.contact.messagePlaceholder}
                  className="min-h-[150px] bg-background border-none rounded-[14px] focus-visible:ring-1 focus-visible:ring-white/20 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 rounded-full bg-gradient-to-b from-white to-[#d1d1d1] text-black font-medium hover:opacity-90 transition-opacity mt-4 disabled:opacity-60 cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              <span>Sending message...</span>
            </span>
          ) : (
            t.contact.sendButton
          )}
        </Button>

        {isSuccess && (
          <div className="p-4 rounded-2xl bg-green-500/15 border border-green-500/30 text-green-400 text-center font-medium space-y-1 mt-3">
            <p className="text-base font-semibold">✅ Message Sent Successfully!</p>
            <p className="text-sm text-green-300/90">Our team has received your inquiry and will connect within 24 hours.</p>
          </div>
        )}
        {error && (
          <div className="p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 text-center font-medium mt-3">
            <p className="text-sm">❌ {error}</p>
          </div>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
