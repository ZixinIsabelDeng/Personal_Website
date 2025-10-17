"use client";
type Locale = "en" | "fr" | "zh";

type LocalizedText = {
  en: string;
  fr: string;
  zh: string;
};
interface ContactSectionProps {
  lang: Locale;
}
export default function ContactSection({ lang }: ContactSectionProps) {
  const t = {
    heading: {
      en: "Contact Me",
      fr: "Contactez-moi",
      zh: "联系我",
    },
    subheading: {
      en: "Got a project idea, job opportunity, or just want to say hi? Let’s talk.",
      fr: "Un projet, une opportunité, ou juste envie de dire bonjour ? Parlons-en.",
      zh: "有项目想法、工作机会，或只是想打个招呼？聊聊吧。",
    },
    firstname: {
      en: "First Name",
      fr: "Prénom",
      zh: "名字",
    },
    lastname: {
      en: "Last Name",
      fr: "Nom",
      zh: "姓氏",
    },
    email: {
      en: "Email",
      fr: "Email",
      zh: "电子邮件",
    },
    message: {
      en: "Message",
      fr: "Message",
      zh: "消息",
    },
    submit: {
      en: "Let’s talk",
      fr: "Parlez-moi",
      zh: "发送",
    },
  } satisfies Record<string, LocalizedText>;

  return (
    <section className="relative isolate bg-[#fadcd9] px-6 py-24 sm:py-32 lg:px-8 mt-16 rounded-2xl shadow">
      {/* heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {t.heading[lang]}
        </h2>
        <p className="mt-2 text-lg text-gray-700">{t.subheading[lang]}</p>
      </div>

      {/* form */}
      <form
        action="https://formspree.io/f/xldwzbbp"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-900"
            >
              {t.firstname[lang]}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-900"
            >
              {t.lastname[lang]}
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              {t.email[lang]}
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              {t.message[lang]}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white 
                 shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            {t.submit[lang]}
          </button>
        </div>
      </form>
    </section>
  );
}
