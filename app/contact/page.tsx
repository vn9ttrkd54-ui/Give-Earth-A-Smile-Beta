import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F1F6C8] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-6xl">Let&apos;s Chat</h1>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl">Email</h2>
            <p className="mt-5">info@giveearthasmile.org</p>
          </div>

          <div>
            <h2 className="text-2xl">Social Media</h2>
            <div className="mt-5 flex flex-wrap gap-5">
              <a href="#" className="underline">
                Instagram
              </a>
              <a href="#" className="underline">
                LinkedIn
              </a>
              <a href="#" className="underline">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Organization</h2>
            <p className="mt-5 leading-7">
              Youth-led environmental education, service, and international
              outreach.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}