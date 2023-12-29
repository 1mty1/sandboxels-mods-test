elements.Nyquil = {
    color: "#9F2B68",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 1.175,
};


elements.GrapeFanta = {
    color: "#800080",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 1.125,
};


elements.Lean = {
    color: "#6E0B6E",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 1.125,
};

elements.Nyquil.reactions.GrapeFanta = { "elem1":null, "elem2":"Lean" }


