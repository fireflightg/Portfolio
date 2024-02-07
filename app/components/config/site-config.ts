export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social"| "equipment" | "music" | "project";
export type EquipmentItem = {
    title: string;
    link: string;
}
export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonSecondaryText?: string;
    buttonLink?: string;
    promotion?: string;
    price?: string;
    oldPrice?: string;

    stars?: number;

    equipments?: EquipmentItem[];
    image?: string;


}
const GridItems: GridItemInterface[] = [
    {
      layout: "2x2",
      type: "social",
      title: "Soundcloud",
      icon: "soundcloud",
      username: "@oncite",
      description:
        "making music for the world to hear",
      color: "#f50",
      buttonTitle: "Listen Here",
      buttonLink: "https://soundcloud.com/oncite",
      buttonSecondaryText: "573",
    },
    {
      layout: "1x2",
      type: "social",
      title: "Discord",
      icon: "discord",
      username: "@oncite",
      buttonTitle: "Join",
      buttonLink: "https://discord.gg/ZeHftpeUPY",
      buttonSecondaryText: "44",
      color: "#5865F2",
    },
    {
      layout: "1x2",
      type: "social",
      title: "Github",
      icon: "github",
      username: "@fireflightg",
      buttonTitle: "Follow",
      buttonSecondaryText: "36",
      buttonLink: "https://github.com/fireflightg",
      color: "#070707",
    },
    {
      layout: "2x4",
      type: "equipment",
      title: "Pc Specs",
      image: "/img.JPG",
      equipments: [
        {
          title: "Ryzen 9 7600x",
          link: "https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV?&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=f91877e8350da1e43b161adac6e9a6d7&camp=1789&creative=9325",
        },
        {
          title: "MSI B660",
          link: "https://www.amazon.com/s?k=tamron+24-75+f2.8+sony+e+mount&sprefix=tamron+24-75%252Caps%252C215&ref=nb_sb_ss_ts-doa-p_1_12&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7f90fb483df302e8131afea2f4cd89bb&camp=1789&creative=9325",
        },
        {
          title: "32gb DDR5",
          link: "https://www.amazon.com/s?k=thronmax+mdrill+one+pro&sprefix=thronmax%252Caps%252C213&ref=nb_sb_ss_ts-doa-p_7_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=ffb6dc2e55c74508300d2c5eac250e1e&camp=1789&creative=9325",
        },
        {
          title: "NZXT AIO",
          link: "https://www.amazon.com/s?k=godox+sl60&crid=2OZLC933LK7K0&sprefix=godox+sl60%252Caps%252C213&ref=nb_sb_noss_1&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=a9fcedfbfaff1bb1301c303a45055038&camp=1789&creative=9325",
        },
        {
          title: "LIANLI O11",
          link: "https://www.amazon.com/Godox-Umbrella-Reflector-Honeycomb-Speedlight/dp/B07H91VH4M/ref=sr_1_19?crid=3UE8NBEUUB1PI&keywords=godox+sl60+softbox&qid=1687880313&sprefix=godox+sl60+%252Caps%252C207&sr=8-19&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7cb2f6734c70d44a3491266b50eac29c&camp=1789&creative=9325",
        },
        {
          title: "Logitech g305",
          link: "https://www.amazon.com/s?k=godox+m1+rgb&crid=2UBYBKYSIYMDW&sprefix=godox+m1+rg%252Caps%252C199&ref=nb_sb_noss_2&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=3da7371f710f9f4f6af4f5817acc728a&camp=1789&creative=9325",
        },
       
      ],
    },
    {
      layout: "2x2",
      type: "social",
      title: "Linkedin",
      icon: "linkedin",
      username: "Saahib Mohammed",
      buttonTitle: "Follow",
      buttonLink: "https://www.linkedin.com/in/saahib",
      buttonSecondaryText: "279",
      color: "#0077B5",
      description:
        "Full-stack Developer / I create music, manage artists,edit, and create full stack applications",
    },
    {
      layout: "2x1",
      type: "music",
      title: "Bachelor's",
      icon: "degree",
      promotion: "CURRENT",
      
      price: "2025",
      buttonLink: "https://www.linkedin.com/in/saahib/details/education/",
    },
    {
      layout: "2x1",
      type: "music",
      title: "Certifications",
      icon: "degree",
      promotion: "",
     
      price: "2021",
      buttonLink: "https://www.linkedin.com/in/saahib/details/certifications/",
    },
    {
      layout: "2x1",
      type: "project",
      title: "Google Data Analytics Specialization",
      icon: "Coursera",
      color: "#FFF",
      buttonLink: "https://www.coursera.org/account/accomplishments/specialization/5XSRGNMQHCNY",
      stars: 2024,
    },
    {
      layout: "2x2",
      type: "social",
      title: "AI Eco-bottle detection software",
      username: "@fireflightg",
      description:
        "Custom AI image detection software done in js to detect spieces in an enviorment",
      icon: "github",
        color: "#070707",
      buttonTitle: "View Project",
      buttonLink:
        "https://github.com/fireflightg/NativeCheck",
    },
    {
      layout: "2x1",
      type: "project",
      title: "Resume",
      icon: "document",
      stars: 2024,
      color: "#070707",
      buttonLink: "https://github.com/fireflightg/resume/blob/1e62b124cb04633e4b4108b99e709e2de06b7dd8/Saahib_Mohammed_-_Software_Developer%20(1)%20(3).pdf",
    },
  ];

export const siteConfig = {
creator: "Saahib Mohammed",
title: "Developer & Artist",
bio: "building impressive projects while expanding his music career, showcasing talents in both the tech and artistry worlds.",
location: "Columbus, Ohio",
locationLink: "",
email: "roboticssaahib@gmail.com",
items: GridItems,

} as const
