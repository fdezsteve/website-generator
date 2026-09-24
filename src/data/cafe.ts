export const cafe = {
  name: "Alder & Lane",
  strapline: "Breakfast, lunch & good coffee. No ceremony.",
  address: "18 Alder Lane, Fitzroy VIC 3065",
  phone: "(03) 9000 1842",
  email: "hello@alderandlane.example",
  hours: [["Mon–Fri", "7:00–15:00"], ["Sat–Sun", "8:00–15:00"]],
  note: "Fictional benchmark business — details are test data.",
} as const;

export const menu = [
  { id:"breakfast", label:"Breakfast", image:"breakfast", items:[
    ["Ricotta toast","Roasted grapes, thyme honey, pistachio","18","V"],
    ["Soft eggs","Sourdough, cultured butter, garden herbs","16","V"],
    ["Mushrooms on toast","White bean cream, lemon, crispy sage","21","VG"],
    ["Alder breakfast","Eggs, potato cake, greens, tomato, sourdough","25","V"],
  ]},
  { id:"lunch", label:"Lunch", image:"lunch", items:[
    ["Chicken focaccia","Roast chicken, salsa verde, leaves, pickled chilli","19",""],
    ["Spring greens","Peas, broad beans, labneh, seeds, flatbread","20","V"],
    ["Market fish toast","Smoked fish, cucumber, dill, lemon","22",""],
  ]},
  { id:"pastries", label:"Pastries", image:"pastry", items:[
    ["Morning bun","Citrus sugar","7","V"],["Almond croissant","Frangipane, toasted almonds","8","V"],["Seasonal danish","Fruit changes with the market","8","V"],
  ]},
  { id:"drinks", label:"Drinks", image:"coffee", items:[
    ["Espresso / black","House seasonal blend","4.5",""],["Milk coffee","Full cream, oat or soy","5",""],["Batch brew","Rotating single origin","5.5",""],["House soda","Seasonal fruit, sparkling water","7",""],
  ]},
] as const;
