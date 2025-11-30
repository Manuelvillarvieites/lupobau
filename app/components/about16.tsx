import React from "react";

const stats = [
  {
    number: "80K+",
    description:
      "From 80K+ users reached to 20+ startups supported, these numbers reflect the scale, impact, and consistency of my work.",
  },
  {
    number: "20+",
    description:
      "Startups supported with innovative solutions and strategic guidance to help them scale and succeed in their markets.",
  },
  {
    number: "95%",
    description:
      "Client satisfaction rate achieved through dedicated support, quality deliverables, and long-term partnerships built on trust.",
  },
];

const About16 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="top-10 col-span-2 flex h-fit w-fit items-center gap-3 lg:sticky">
            <span className="size-2 bg-orange-500" />
            <p className="text-foreground/30 uppercase">Why us?</p>
          </div>
          <div className="col-span-4 ml-auto max-w-3xl space-y-10">
            <h1 className="text-3xl font-medium tracking-tight lg:text-4xl">
              "We are a team of creators, thinkers, and builders who believe in
              crafting experiences that truly connect. Our story is built on
              passion, innovation, and the drive to bring meaningful ideas to
              life."
            </h1>

            <p className="text-foreground/40 text-lg">
              We ask: What's the goal? Who's it for? How do we make it
              effortless?
              <br className="hidden lg:block" />
              We begin with why, who, and how to make it better.
            </p>

            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png"
              alt=""
              className="h-110 pointer-events-none w-full object-cover"
            />
            <ul className="mt-14">
              {stats.map((stat, index) => (
                <li key={index} className="grid grid-cols-5 border-b py-8">
                  <h3 className="col-span-2 text-4xl font-medium">
                    {stat.number}
                  </h3>
                  <p className="col-span-3">{stat.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About16 };
