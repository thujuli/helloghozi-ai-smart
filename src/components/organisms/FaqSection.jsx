import FaqAccordion from "../molecules/FaqAccordion";
import FaqHeader from "../molecules/FaqHeader";
import FaqSendMessage from "../molecules/FaqSendMessage";

const faqs = [
  {
    title: "How easy is it to setup AITool?",
    description:
      "We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.",
  },
  {
    title: "What your refund policy?",
    description:
      "We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.",
  },
  {
    title: "Can I integrate AITool with other platforms?",
    description:
      "We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.",
  },
  {
    title: "Do you have corporate plans?",
    description:
      "We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.",
  },
  {
    title: "How often do you add new content?",
    description:
      "We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.",
  },
  {
    title: "Can I cancel my subscription at any time?",
    description:
      "We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.",
  },
];

export default function FaqSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-[50px] px-5 bg-primary10 md:px-10 ">
      <div className="flex flex-col gap-y-10 bg-white rounded-[70px] border-[1.5px] border-black10 pt-[50px] md:p-[50px]">
        <FaqHeader>
          <FaqHeader.Title className="mb-5">
            FAQs Frequently Asked Questions!
          </FaqHeader.Title>
          <FaqHeader.Description>
            Need Any Help? Send us a message using the form below and we'll get
            back to you promptly!
          </FaqHeader.Description>
        </FaqHeader>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map(({ title, description }, index) => (
            <FaqAccordion key={index}>
              <FaqAccordion.Title>{title}</FaqAccordion.Title>
              <FaqAccordion.Description>{description}</FaqAccordion.Description>
            </FaqAccordion>
          ))}
        </div>
        <FaqSendMessage>
          <FaqSendMessage.Title className="text-center mb-[10px] md:text-start">
            Still Need Help?
          </FaqSendMessage.Title>
          <FaqSendMessage.Description className="text-center md:text-start">
            Can't find the answer here? Message us for help!
          </FaqSendMessage.Description>
        </FaqSendMessage>
      </div>
    </section>
  );
}
