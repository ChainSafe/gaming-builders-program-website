import { Disclosure } from '@headlessui/react';
import { Plus, Minus } from '@phosphor-icons/react';

const faqs = [
  {
    question: "What is ChainSafe's Builder\'s Program?",
    answer:
      'The ChainSafe Builder\'s Program is an initiative designed to provide funding, guidance, and support to developers who want to create innovative projects using ChainSafe Gaming.',
  },
  {
    question: 'Who is eligible to apply for the Builders\' Program?',
    answer:
      'Developers, both individuals and teams, are eligible to apply for the program. We welcome creators from various backgrounds and experience levels.',
  },
  {
    question:
      'What types of projects are eligible for funding through the program?',
    answer:
      "We encourage a wide range of creative projects related to ChainSafe Gaming. This can include blockchain-based games, NFT marketplaces, decentralized applications, and more. If you have a unique idea, we'd love to hear about it.",
  },
  {
    question: 'How does the funding process work?',
    answer:
      'Once your project is selected, we provide financial support to help you bring your idea to life. The funding amount will depend on the scope and potential impact of your project, as determined by our review process.',
  },
  {
    question: 'What kind of guidance and support does the program offer?',
    answer:
      'We offer a variety of resources, including mentorship, technical guidance, access to our network of experts, and help with project planning and execution. Our goal is to ensure you have the tools and knowledge to succeed.',
  },
  {
    question: 'Is there a timeline for the Builder\'s Program?',
    answer:
      'The program typically operates on a cohort basis, with specific start and end dates for each cohort. Be sure to check our website or announcements for the latest information on application deadlines and program timelines.',
  },
  {
    question:
      'What are the expectations for developers who participate in the program?',
    answer:
      "We expect participants to actively work on and make progress with their projects, engage with mentors and the ChainSafe community, and keep us updated on their project's status. Regular communication and collaboration are key.",
  },
  {
    question: 'How can I apply for the ChainSafe Builder\'s Program?',
    answer:
      'To apply, visit our website and look for the application form during the open application period. Follow the provided instructions to submit your project proposal.',
  },
  {
    question:
      'Is there any equity or ownership taken by ChainSafe in the projects developed through the program?',
    answer:
      'No, we do not take ownership or equity in the projects developed by participants in the Builder\'s Program. We are here to support your vision and help you succeed.',
  },
  {
    question: 'What happens after my project is completed?',
    answer:
      'Once your project is completed, we encourage you to launch it and continue to grow it independently. We will celebrate your success and may feature your project as a showcase of what can be achieved with ChainSafe Gaming.',
  },
];

export default function FAQ() {
  return (
    <div className='bg-gray-900'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-4xl divide-y divide-white/10'>
          <h2 className='max-w-4xl mobile-header-light lg:h1-light'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-white/10'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-200'>
                        <span className='text-xl leading-6'>
                          {faq.question}
                        </span>
                        <span className='ml-6 flex h-7 items-center'>
                          {open ? (
                            <Minus className='h-6 w-6 text-gray-600' aria-hidden='true' />
                          ) : (
                            <Plus className='h-6 w-6 text-brand-400' aria-hidden='true' />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-lg leading-7 text-gray-400'>
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
