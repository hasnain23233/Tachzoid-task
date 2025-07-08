import React from "react";

const huntingRates = [
    {
        id: 1,
        title: "Whitetail Deer",
        description: [
            "130–149\" – $3,000",
            "150–159\" – $4,000",
            "160–169\" – $5,000",
            "170–179\" – $6,000",
            "180–199\" – $7,500",
            "200–220\" – $8,000",
            "221–250\" – $9,000",
            "250\"+ – Call for pricing",
        ],
        image: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        note: "Starting at $3,000 for 149\" and below. Anything over 250\" call for pricing. $500 deposit required.",
        priceRange: "$3,000–$9,000+",
    },
    {
        id: 2,
        title: "Elk",
        description: [
            "300–320\" – $4,500",
            "321–340\" – $5,500",
            "341–360\" – $6,500",
            "361–380\" – $7,500",
            "380\"+ – Call for pricing",
        ],
        image: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        note: "Pricing varies by bull size. Call for details.",
        priceRange: "$4,500–$7,500+",
    },
    {
        id: 3,
        title: "Black Bear",
        description: [
            "Spring Season – $2,500",
            "Fall Season – $3,000",
        ],
        image: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        note: "Includes baited and spot/stalk options.",
        priceRange: "$2,500–$3,000",
    },
];

const HuntingRates = () => {
    return (
        <div className="w-11/12 mx-auto mt-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8">
                Hunting Rates by Game & Season
            </h2>
            <div className="space-y-8 ">
                {huntingRates.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col h-[280px] overflow-hidden md:flex-row bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="p-2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full md:w-64 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="mb-2">
                                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600 p-3 mb-3">{item.note}</p>
                                <ul className="list-disc grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-8 text-gray-700 space-y-1">
                                    {item.description.map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start h-full items-center justify-between">

                            <span className="text-green-700 font-semibold">{item.priceRange}</span>
                            <button className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                                Book Your Hunt
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 flex gap-6">
                <div className="w-5/12 ">
                    <img src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-md" />
                </div>
                <div className="md:w-6/12 w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 w-fit pb-1">
                        Rates by Season:
                    </h2>

                    <p className="text-gray-700 mb-4">
                        Depending on the season, weaponry, and type of hunt selected, prices may vary. All hunters are responsible for purchasing valid hunting licenses for each season for free range hunts. Minimum of 3 nights stay required for free range and preserve hunts.
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                        <li><strong>Bow Season</strong> – Free range hunts are <strong>$600/night per person</strong>.</li>
                        <li><strong>November 1st until Gun Season</strong> – Free range hunts are <strong>$600/night per person</strong>.</li>
                        <li><strong>Shotgun and Muzzleloader Season</strong> – Free range hunts are <strong>$600/night per person</strong>.</li>
                    </ul>

                    <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
                        Book Your Hunt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HuntingRates;
