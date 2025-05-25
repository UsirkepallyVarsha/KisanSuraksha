const rootData = [
  {
    tool_id: "201",
    tool_name: "Tractor",
    type: "Heavy Machinery",
    rental_price_per_hour: 300,
    availability: "Available",
    image: " https://assets.khetigaadi.com/new-tractor/Mahindra-225-DI-Power-Plus1735716131_LywjFEVCo.png ",
    specifications: {
      horsepower: 50,
      weight: "1,800 kg",
      fuel_type: "Diesel",
      capacity: "3 tons"
    },
    rating: 4.8
  },
  {
    tool_id: "202",
    tool_name: "Plow",
    type: "Tillage Equipment",
    rental_price_per_hour: 100,
    availability: "Available",
    image: "https://t3.ftcdn.net/jpg/03/11/22/90/360_F_311229028_dBcSdFrl6lJpsRds9FA1xViVxpwYmXMG.jpg ",
    specifications: {
      width: "1.5 meters",
      weight: "200 kg",
      material: "Steel"
    },
    rating: 4.5
  },
  {
    tool_id: "203",
    tool_name: "Seed Drill",
    type: "Seeding Equipment",
    rental_price_per_hour: 150,
    availability: "Not Available",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/367520477/YP/SG/PW/2497808/seed-drills-9-tyne.jpg ",
    specifications: {
      row_spacing: "30 cm",
      seed_capacity: "100 kg",
      weight: "350 kg"
    },
    rating: 4.7
  },
  {
    tool_id: "204",
    tool_name: "Sprayer",
    type: "Crop Protection Equipment",
    rental_price_per_hour: 120,
    availability: "Available",
    image: "https://mlhobevaucyf.i.optimole.com/w:auto/h:auto/q:mauto/f:best/ig:avif/https://novo3ds.in/wp-content/uploads/2023/06/AG086_power_Sprayer_1.jpg",
    specifications: {
      tank_capacity: "200 liters",
      pressure: "1.5 bar",
      type: "Manual"
    },
    rating: 4.6
  },
  {
    tool_id: "205",
    tool_name: "Harvesting Machine",
    type: "Harvesting Equipment",
    rental_price_per_hour: 500,
    availability: "Available",
    image: "https://www.deere.co.in/assets/images/region-1/Misc/w70-synchrosmart-combine-harvester.jpg ",
    specifications: {
      cutting_width: "2.5 meters",
      fuel_type: "Diesel",
      weight: "2,500 kg"
    },
    rating: 4.9
  },
  {
    tool_id: "206",
    tool_name: "Rotavator",
    type: "Tillage Equipment",
    rental_price_per_hour: 200,
    availability: "Available",
    image: "https://international.sonalika.com/wp-content/uploads/2020/09/smart-series-img.jpg ",
    specifications: {
      width: "1.8 meters",
      weight: "600 kg",
      depth: "15 cm"
    },
    rating: 4.4
  },
  {
    tool_id: "207",
    tool_name: "Cultivator",
    type: "Tillage Equipment",
    rental_price_per_hour: 150,
    availability: "Available",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/9-tine-rigid-cultivator-384748043-zzyt1.png ",
    specifications: {
      width: "2 meters",
      weight: "400 kg",
      number_of_tines: 12
    },
    rating: 4.3
  },
  {
    tool_id: "208",
    tool_name: "Fertilizer Spreader",
    type: "Crop Management Equipment",
    rental_price_per_hour: 100,
    availability: "Available",
    image: "https://www.fieldking.com/images/crop-protection/fertilizer-spreader/lg/fertilizer-spreader.png",

    specifications: {
      capacity: "150 liters",
      weight: "50 kg"
    },
    rating: 4.5
  },
  {
    tool_id: "209",
    tool_name: "Post Hole Digger",
    type: "Digging Equipment",
    rental_price_per_hour: 80,
    availability: "Available",
    image: "https://www.indiaagrovision.com/uploads/products/post-hole-digger-copy_772948879_l.png",

    specifications: {
      depth: "1 meter",
      weight: "25 kg"
    },
    rating: 4.6
  },
  {
    tool_id: "210",
    tool_name: "Baler",
    type: "Harvesting Equipment",
    rental_price_per_hour: 400,
    availability: "Not Available",
    image: "https://www.deere.co.in/assets/images/implements/rotary-rake/square-baler//implements_square_baler_large_31cb2a0da546f361957a2f0b798aedbe4f6bf024.jpg",

    specifications: {
      width: "1.5 meters",
      weight: "1,000 kg"
    },
    rating: 4.8
  },
  {
    tool_id: "211",
    tool_name: "Irrigation Pump",
    type: "Water Management Equipment",
    rental_price_per_hour: 150,
    availability: "Available",
    image: "https://www.daepumps.com/images/Key-Features-of-Agricultural-Water-Pumps.jpg",

    specifications: {
      flow_rate: "500 liters/min",
      power: "5 HP"
    },
    rating: 4.7
  },
  {
    tool_id: "212",
    tool_name: "Chainsaw",
    type: "Cutting Equipment",
    rental_price_per_hour: 90,
    availability: "Available",
    image: " https://www.stihl.in/content/dam/stihl/media/pim/15387.jpg  ",
    specifications: {
      blade_length: "18 inches",
      weight: "5 kg"
    },
    rating: 4.3
  },
  {
    tool_id: "213",
    tool_name: "Tiller",
    type: "Tillage Equipment",
    rental_price_per_hour: 130,
    availability: "Available",
    image: "https://www.hondaindiapower.com/admin/public/uploads/Products/t25y4kt8Kx.jpg ",
    specifications: {
      width: "1 meter",
      power: "2 HP"
    },
    rating: 4.6
  },
  {
    tool_id: "214",
    tool_name: "Lawn Mower",
    type: "Cutting Equipment",
    rental_price_per_hour: 70,
    availability: "Available",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319451881/XR/XL/XL/104461748/lawn-mower-139-cc-4-stroke-self-propelled-petrol-engine-20-cutting-blade.jpg ",
    specifications: {
      cutting_width: "40 cm",
      weight: "15 kg"
    },
    rating: 4.5
  },
  {
    tool_id: "215",
    tool_name: "Weed Cutter",
    type: "Weed Management Equipment",
    rental_price_per_hour: 80,
    availability: "Available",
    image: "https://toolgine.com/wp-content/uploads/2023/05/falcon-supercut-weed-cutter-fbc-52-198_500_500-1.webp",
    specifications: {
      weight: "4 kg",
      type: "Manual"
    },
    rating: 4.2
  },
  {
    tool_id: "216",
    tool_name: "Soil Moisture Meter",
    type: "Soil Management Equipment",
    rental_price_per_hour: 50,
    availability: "Available",
    image: "https://m.media-amazon.com/images/I/710OdAGqFPL.jpg",
    specifications: {
      depth_range: "0-30 cm",
      accuracy: "±2%"
    },
    rating: 4.8
  },
  {
    tool_id: "217",
    tool_name: "Pesticide Sprayer",
    type: "Crop Protection Equipment",
    rental_price_per_hour: 120,
    availability: "Available",
    image: "https://m.media-amazon.com/images/I/617IKNDTLWL.AC_UF1000,1000_QL80.jpg",
    specifications: {
      tank_capacity: "15 liters",
      pressure: "1.2 bar"
    },
    rating: 4.5
  },
  {
    tool_id: "218",
    tool_name: "Hay Rake",
    type: "Harvesting Equipment",
    rental_price_per_hour: 150,
    availability: "Available",
    image: "https://ik.imagekit.io/tractorkarvan/tr:w-548,f-webp,di-placeholder.png/images/Implements/Shaktiman/PTO-Hay-Rake-SRHR-3_3.jpg",
    specifications: {
      working_width: "2 meters",
      weight: "500 kg"
    },
    rating: 4.6
  },
  {
    tool_id: "219",
    tool_name: "Moving Hoe",
    type: "Tillage Equipment",
    rental_price_per_hour: 60,
    availability: "Available",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Weeder.jpg/330px-Weeder.jpg",
    specifications: {
      width: "1 meter",
      weight: "10 kg"
    },
    rating: 4.4
  },
  {
    tool_id: "220",
    tool_name: "Garden Fork",
    type: "Hand Tool",
    rental_price_per_hour: 30,
    availability: "Available",
    image: "https://twothirstygardeners.co.uk/wp-content/uploads/2014/05/2TG_hand_fork_660x250.jpg ",
    specifications: {
      tines: 4,
      weight: "1.5 kg"
    },
    rating: 4.7
  },
  {
    tool_id: "221",
    tool_name: "Hedge Trimmer",
    type: "Cutting Equipment",
    rental_price_per_hour: 80,
    availability: "Available",
    image: "https://m.media-amazon.com/images/I/51E-bJ2f5CL.AC_UF1000,1000_QL80.jpg",
    specifications: {
      blade_length: "20 inches",
      weight: "3 kg"
    },
    rating: 4.5
  },
  {
    tool_id: "222",
    tool_name: "Pressure Washer",
    type: "Cleaning Equipment",
    rental_price_per_hour: 90,
    availability: "Available",
    image: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2021/01/Kranzle-1_F_C_Nick-Fone.jpg",
    specifications: {
      pressure: "1500 PSI",
      power: "1.5 HP"
    },
    rating: 4.8
  },
  {
    tool_id: "223",
    tool_name: "Electric Generator",
    type: "Power Equipment",
    rental_price_per_hour: 200,
    availability: "Not Available",
    image: "https://cdn.teachoo.com/3c798ba7-0d5a-4264-8640-f5e0a3ab99ee/electric-generator-example.jpg",
    specifications: {
      output_power: "5 kW",
      fuel_type: "Petrol"
    },
    rating: 4.6
  },
  {
    tool_id: "224",
    tool_name: "Chisel Plow",
    type: "Tillage Equipment",
    rental_price_per_hour: 150,
    availability: "Available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmLoIBBOAlL-NkMJRJx_gmOYIs4AS4PG_-w&s ",
    specifications: {
      width: "2.5 meters",
      weight: "700 kg"
    },
    rating: 4.3
  },
  {
    tool_id: "225",
    tool_name: "Composter",
    type: "Soil Management Equipment",
    rental_price_per_hour: 50,
    availability: "Available",
    image: "https://stonesoup.in/cdn/shop/products/aaditi01_1024x1024.jpg?v=1556515769",
    specifications: {
      capacity: "200 liters",
      weight: "70 kg"
    },
    rating: 4.5
  },
  {
    tool_id: "226",
    tool_name: "Sickle",
    type: "Hand Tool",
    rental_price_per_hour: 20,
    availability: "Available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGM_ILKDipRZC1S7Q2GNuNNMFZUiJbigMZg&s",
    specifications: {
      length: "60 cm",
      weight: "1 kg"
    },
    rating: 4.4
  },
  {
    tool_id: "227",
    tool_name: "Manure Spreader",
    type: "Fertilizer Equipment",
    rental_price_per_hour: 150,
    availability: "Available",
    image: "https://images-cdn.ubuy.co.in/635bec45b0381956db77c57e-country-manufacturing-model-600-manure.jpg",
    specifications: {
      capacity: "300 liters",
      weight: "800 kg"
    },
    rating: 4.6
  },
  {
    tool_id: "228",
    tool_name: "Cart",
    type: "Transport Equipment",
    rental_price_per_hour: 100,
    availability: "Available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbzlRkJc6nNB-nHGRV9bb6mJARwWkjvoI2w&s",
    specifications: {
      load_capacity: "500 kg",
      weight: "100 kg"
    },
    rating: 4.3
  },
  {
    tool_id: "229",
    tool_name: "Tarp",
    type: "Cover Equipment",
    rental_price_per_hour: 50,
    availability: "Available",
    image: "https://images-cdn.ubuy.co.in/6686c070e551c93d5141baed-geertop-17-x-10-ft-camping-tarp.jpg",
    specifications: {
      dimensions: "3x4 meters",
      weight: "3 kg"
    },
    rating: 4.5
  },
  {
    tool_id: "230",
    tool_name: "Mulcher",
    type: "Soil Management Equipment",
    rental_price_per_hour: 160,
    availability: "Available",
    image: "https://shaktimanagro.com/wp-content/uploads/2024/08/Shaktiman_Mulcher_Image_2.png ",
    specifications: {
      cutting_width: "2 meters",
      weight: "900 kg"
    },
    rating: 4.8
  }
];

export default rootData;