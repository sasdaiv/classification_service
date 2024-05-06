export type TLanguage = 'en' | 'lv';
export const possibleLanguages: Record<TLanguage, { name: string; icon: string }> = {
	lv: {
		name: 'Latviešu',
		icon: 'lv.svg',
	},
	en: {
		name: 'English',
		icon: 'en.svg',
	},
};

export const faqData = {
	en: [
		{
			question: 'Some random question?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Ipsa voluptate, aperiam nostrum dicta nemo, ducimus illo facere quo ex iusto, eum sequi. Debitis iste laborum aliquid assumenda nemo maiores deleniti hic, sint aperiam adipisci, rerum et beatae cumque.
        Quaerat consectetur hic inventore doloribus! Illum tempora similique unde? Totam illum facilis suscipit sed soluta nisi minus. Fuga placeat explicabo eaque? Voluptatibus voluptatem libero assumenda. Maxime praesentium eaque quod ex!
        reiciendis iusto.
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
		{
			question: 'What is LVS1048?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Ipsa voluptate, aperiam nostrum dicta nemo, ducimus illo facere quo ex iusto, eum sequi. Debitis iste laborum aliquid assumenda nemo maiores deleniti hic, sint aperiam adipisci, rerum et beatae cumque.
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
		{
			question: 'Some random question?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
		{
			question: 'What is LVS1048?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Ipsa voluptate, aperiam nostrum dicta nemo, ducimus illo facere quo ex iusto, eum sequi. Debitis iste laborum aliquid assumenda nemo maiores deleniti hic, sint aperiam adipisci, rerum et beatae cumque.
        ibusdam?
        Ducimus eius temporibus quisquam natus dolores illum fugiat optio praesentium nulla? Magni, alias accusantium ipsa in reiciendis ducimus quia nisi similique libero iste odio. Iure doloremque nulla velit reiciendis iusto.
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
	],
	lv: [
		{
			question: 'Kāda ir kāda nejauša jautājums?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Ipsa voluptate, aperiam nostrum dicta nemo, ducimus illo facere quo ex iusto, eum sequi. Debitis iste laborum aliquid assumenda nemo maiores deleniti hic, sint aperiam adipisci, rerum et beatae cumque.
        Quaerat consectetur hic inventore doloribus! Illum tempora similique unde? Totam illum facilis suscipit sed soluta nisi minus. Fuga placeat explicabo eaque? Voluptatibus voluptatem libero assumenda. Maxime praesentium eaque quod ex!
        reiciendis iusto.
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
		{
			question: 'Kas ir LVS1048?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Ipsa voluptate, aperiam nostrum dicta nemo, ducimus illo facere quo ex iusto, eum sequi. Debitis iste laborum aliquid assumenda nemo maiores deleniti hic, sint aperiam adipisci, rerum et beatae cumque.
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
		{
			question: 'Kāda ir kāda nejauša jautājums?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
		{
			question: 'Kas ir LVS1048?',
			answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fuga in, dolor adipisci iusto deleniti? Quis doloremque accusantium ipsa asperiores corrupti rerum quaerat nulla quam delectus, voluptates ea facere necessitatibus?
        Ipsa voluptate, aperiam nostrum dicta nemo, ducimus illo facere quo ex iusto, eum sequi. Debitis iste laborum aliquid assumenda nemo maiores deleniti hic, sint aperiam adipisci, rerum et beatae cumque.
        ibusdam?
        Ducimus eius temporibus quisquam natus dolores illum fugiat optio praesentium nulla? Magni, alias accusantium ipsa in reiciendis ducimus quia nisi similique libero iste odio. Iure doloremque nulla velit reiciendis iusto.
        Vero dignissimos ullam eveniet voluptas aspernatur ad accusantium esse incidunt facere qui sapiente voluptates, cum sint. At aliquam, ipsa facilis ipsam cum sed ad fuga ex? Accusantium sint fugiat cum!`,
		},
	],
};

export const options: Record<string, string> = {
	at: 'Apbūvēta telpas',
	bk: 'Būvniecības komplekss',
	bv: 'Būvniecības vienība',
	be: 'Būvelements',
	bm: 'Būvizstrādājumi',
	ba: 'Būvniecības aprīkojums',
	pk: 'Profesiju klasifikators',
	bi: 'Būvniecības informācija',
	bp: 'Būvniecības process',
	pv: 'Pārvaldība',
};
export const finishedOptions: Record<string, string> = {
	be: 'Būvelements',
	ba: 'Būvniecības aprīkojums',
	bi: 'Būvniecības informācija',
	bm: 'Būvizstrādājumi',
	bp: 'Būvniecības process',
};

export const teamMembers = [
	{ fullName: 'John Smith', position: 'CEO', photo: '/team/user1.jpeg' },
	{ fullName: 'Jane Doe', position: 'Vice President', photo: '/team/user2.jpeg' },
	{ fullName: 'Will Cannady', position: 'Developer', photo: '/team/user3.jpeg' },
	{ fullName: 'Cassady Collins', position: 'Designer', photo: '/team/user4.jpeg' },
];

export const connectInfromation = [
	{
		label: '+1234567890',
		icon: 'phone',
		linkProps: {
			href: 'tel:+1234567890',
		},
	},
	{
		label: 'lvs1048@gmail.com',
		icon: 'envelope',
		linkProps: {
			href: 'mailto:lvs1048@gmail.com',
		},
	},
	{
		label: 'P133, Mārupe, Mārupes novads, LV-1053, Latvia',
		icon: 'location',
		linkProps: {
			href: 'https://www.google.com/maps/place/@56.9717575,24.1290734,11z/data=!3m1!4b1!4m6!3m5!1s0x46eecfb0e5073ded:0x400cfcd68f2fe30!8m2!3d56.9676941!4d24.1056221!16zL20vMDZjbjU?entry=ttu',
			target: '_blank',
		},
	},
];
