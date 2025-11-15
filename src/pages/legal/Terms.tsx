export function Terms() {
  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using Prompt2Prod, you agree to be bound by these Terms of Service and all
              applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Use of Service</h2>
            <p className="mb-4">You agree to use our service only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the service in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use the service to transmit any malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by Prompt2Prod and are
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
            <p>
              We may terminate or suspend your account and access to the service immediately, without prior notice,
              for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@prompt2prod.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
