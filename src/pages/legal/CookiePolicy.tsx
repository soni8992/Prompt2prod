export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use
              our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-white">Essential Cookies:</strong> These cookies are necessary for the
                website to function properly.
              </li>
              <li>
                <strong className="text-white">Analytics Cookies:</strong> These help us understand how visitors
                interact with our website.
              </li>
              <li>
                <strong className="text-white">Preference Cookies:</strong> These remember your preferences and
                settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Please note that removing or
              blocking cookies may impact your user experience and some features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at privacy@prompt2prod.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
