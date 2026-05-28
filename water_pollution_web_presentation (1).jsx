export default function WaterPollutionPresentation() {
  const slides = [
    {
      title: "Introduction to Water Pollution",
      points: [
        "Definition of water pollution",
        "Water is essential for life",
        "Pollution affects humans, animals, and plants",
        "Growing global problem",
        "Need for urgent solutions"
      ],
      explanations: [
        "Water pollution happens when harmful substances contaminate rivers, lakes, oceans, or groundwater.",
        "Humans, animals, and plants all depend on clean water to survive and stay healthy.",
        "Pollution damages ecosystems and affects both living organisms and the environment.",
        "Many countries around the world are facing serious water pollution problems today.",
        "Immediate action is needed to protect water resources for future generations."
      ],
      notes: "Introduce the topic by explaining that water pollution happens when harmful substances contaminate rivers, lakes, oceans, or groundwater.",
      visual: "Clean vs polluted water comparison"
    },
    {
      title: "Main Causes of Water Pollution",
      points: [
        "Industrial waste",
        "Plastic and trash dumping",
        "Oil spills",
        "Agricultural chemicals",
        "Sewage and wastewater"
      ],
      explanations: [
        "Factories often release chemicals and waste into nearby water bodies.",
        "People throwing plastics and garbage into rivers and oceans pollutes water sources.",
        "Oil spills from ships and industries harm marine life and water quality.",
        "Fertilizers and pesticides from farms wash into rivers and lakes.",
        "Untreated sewage spreads harmful bacteria and diseases in water."
      ],
      notes: "Explain how human activities are the major cause of pollution.",
      visual: "Factories releasing waste into water"
    },
    {
      title: "Types of Water Pollution",
      points: [
        "Surface water pollution",
        "Groundwater pollution",
        "Ocean pollution",
        "Chemical pollution",
        "Biological pollution"
      ],
      explanations: [
        "Surface water pollution affects rivers, lakes, and streams.",
        "Groundwater pollution contaminates underground water sources.",
        "Ocean pollution is caused by waste dumped into seas and oceans.",
        "Chemical pollution includes toxic substances such as oil and pesticides.",
        "Biological pollution is caused by bacteria and harmful microorganisms."
      ],
      notes: "Describe the different forms of pollution and where they occur.",
      visual: "Diagram of polluted water sources"
    },
    {
      title: "Effects on Human Health",
      points: [
        "Spread of diseases",
        "Unsafe drinking water",
        "Skin infections",
        "Poisoning from chemicals",
        "Increased health costs"
      ],
      explanations: [
        "Polluted water spreads diseases such as cholera and typhoid.",
        "Contaminated water becomes dangerous for drinking and cooking.",
        "Dirty water can cause skin irritation and infections.",
        "Toxic chemicals in water may poison humans and animals.",
        "Governments and families spend more money treating diseases caused by pollution."
      ],
      notes: "Explain how polluted water can lead to illnesses such as cholera and typhoid.",
      visual: "Unsafe drinking water image"
    },
    {
      title: "Effects on Aquatic Life",
      points: [
        "Death of fish and animals",
        "Destruction of ecosystems",
        "Reduced oxygen in water",
        "Plastic harming marine animals",
        "Loss of biodiversity"
      ],
      explanations: [
        "Fish and sea animals die when water becomes toxic.",
        "Pollution destroys habitats where aquatic organisms live.",
        "Waste reduces oxygen levels needed by fish and plants.",
        "Marine animals may swallow plastic or become trapped in it.",
        "Many species disappear because they cannot survive polluted environments."
      ],
      notes: "Discuss how pollution destroys habitats and aquatic life.",
      visual: "Sea animals affected by plastic"
    },
    {
      title: "Environmental and Economic Impact",
      points: [
        "Damage to tourism",
        "Loss of fishing jobs",
        "Reduced clean water supply",
        "Harm to agriculture",
        "Expensive cleanup efforts"
      ],
      explanations: [
        "Polluted beaches and rivers discourage tourists from visiting.",
        "Fishermen lose income when fish populations decrease.",
        "Communities struggle to find enough safe water for daily use.",
        "Farmers cannot use polluted water for crops and animals.",
        "Cleaning polluted water and environments costs a lot of money."
      ],
      notes: "Explain how pollution affects the environment and economies.",
      visual: "Polluted beach or shoreline"
    },
    {
      title: "Water Pollution Around the World",
      points: [
        "Global environmental issue",
        "Rivers and oceans affected",
        "Developing countries face challenges",
        "Climate change worsens pollution",
        "Need for international cooperation"
      ],
      explanations: [
        "Water pollution affects countries across the entire world.",
        "Many rivers, lakes, and oceans are contaminated by waste.",
        "Some developing countries lack proper waste management systems.",
        "Floods and climate change spread pollutants more easily.",
        "Countries must work together to reduce pollution globally."
      ],
      notes: "Mention that many countries struggle with polluted water resources.",
      visual: "World map with polluted regions"
    },
    {
      title: "Solutions to Water Pollution",
      points: [
        "Proper waste disposal",
        "Recycling plastics",
        "Treating industrial waste",
        "Reducing chemical use",
        "Community cleanups"
      ],
      explanations: [
        "People should dispose of waste correctly instead of dumping it into water.",
        "Recycling helps reduce the amount of plastic entering rivers and oceans.",
        "Factories should treat waste before releasing it into the environment.",
        "Farmers can reduce harmful chemicals to protect water sources.",
        "Communities can organize cleanup activities to remove pollution."
      ],
      notes: "Introduce practical solutions for reducing pollution.",
      visual: "Community cleaning a river"
    },
    {
      title: "What Students and Communities Can Do",
      points: [
        "Avoid littering",
        "Use less plastic",
        "Join cleanup campaigns",
        "Spread awareness",
        "Save water responsibly"
      ],
      explanations: [
        "Throwing trash in bins helps keep rivers and lakes clean.",
        "Using reusable bags and bottles reduces plastic waste.",
        "Students can participate in local environmental cleanup programs.",
        "Teaching others about pollution encourages positive change.",
        "Saving water helps reduce pressure on clean water supplies."
      ],
      notes: "Encourage students to take action in protecting water resources.",
      visual: "Students cleaning the environment"
    },
    {
      title: "Conclusion and Call to Action",
      points: [
        "Water is vital for life",
        "Pollution threatens the future",
        "Everyone has a responsibility",
        "Solutions are possible",
        "Act now to protect water"
      ],
      explanations: [
        "Without clean water, humans, animals, and plants cannot survive.",
        "Continued pollution will harm future generations and ecosystems.",
        "Governments, industries, schools, and individuals all play a role.",
        "Through education and action, pollution can be reduced.",
        "We must start protecting our water resources today before it is too late."
      ],
      notes: "End with a strong message encouraging action against water pollution.",
      visual: "Clean water and healthy environment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-cyan-700 p-8 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Water Pollution Presentation
        </h1>
        <p className="text-center text-lg text-blue-100 mb-10">
          Finding Solutions to Protect Our Water Resources
        </p>

        <div className="grid gap-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">
                  Slide {index + 1}: {slide.title}
                </h2>
                <span className="bg-cyan-400 text-blue-900 px-4 py-2 rounded-full font-semibold">
                  Presentation Slide
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-200">
                    Key Points
                  </h3>
                  <ul className="space-y-4 text-lg">
                    {slide.points.map((point, i) => (
                      <li
                        key={i}
                        className="bg-white/10 rounded-2xl p-4 border border-white/10"
                      >
                        <p className="font-semibold text-cyan-100 mb-2">
                          • {point}
                        </p>
                        <p className="text-base text-blue-50 leading-relaxed">
                          {slide.explanations[i]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/20 rounded-2xl p-5">
                    <h3 className="text-xl font-semibold text-cyan-200 mb-2">
                      Speaker Notes
                    </h3>
                    <p className="text-blue-50">{slide.notes}</p>
                  </div>

                  <div className="bg-black/20 rounded-2xl p-5">
                    <h3 className="text-xl font-semibold text-cyan-200 mb-2">
                      Suggested Visual
                    </h3>
                    <p className="text-blue-50">{slide.visual}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
