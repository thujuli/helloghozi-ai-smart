import TestimonialCard from "../molecules/TestimonialCard";

const clients = [
  {
    name: "Musideri",
    testimonial:
      "I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations w",
  },
  {
    name: "Ghozi Arslan",
    testimonial:
      "I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations w",
  },
  {
    name: "Pakde Siti",
    testimonial:
      "I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations w",
  },
  {
    name: "Nandarea",
    testimonial:
      "I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations w",
  },
  {
    name: "Muklisea",
    testimonial:
      "I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations w",
  },
  {
    name: "Mumuh lis",
    testimonial:
      "I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations w",
  },
];

export default function TestimonialSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-[100px] px-5 gap-y-[50px] md:px-10 lg:px-[100px] ">
      <h2 className="text-black100 font-medium text-[28px] text-center w-8/12 mx-auto md:text-[38px] lg:text-[48px]">
        why customers <span className="text-[#F35A2A]">love us</span>
      </h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {clients.map(({ name, testimonial }, index) => (
          <TestimonialCard key={index} name={name}>
            {testimonial}
          </TestimonialCard>
        ))}
      </div>
    </section>
  );
}
