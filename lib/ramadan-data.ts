type Person = {
    id: number;
    name: string;
    ramadan: string;
    date: string;
};

type RamadanInfo = {
    title: string;
    people: Person[];
    footer: string;
    tableHeader: {
        id: string;
        name: string;
        ramadan: string;
        date: string;
    };
};

const data: RamadanInfo = {
    title: "উত্তর আলীনাপাডা পুরাতন জামে মসজিদের উদ্যোগে আয়োজিত ২০২৬ইং রমাদানের ইফতারদাতাদের নাম, দিন ও তারিখ সমূহের তালিকা",
    tableHeader: {
        id: "ক্রমিক নং",
        name: "ইফতার দাতাদের নাম",
        ramadan: "রোজার দিন",
        date: "তারিখ",
    },
    people: [
        { id: 1, name: "মো: বিল্লাল হোসেন (বিল্লি)", ramadan: "১ম", date: "১৯শে ফেব্রুয়ারি" },
        { id: 2, name: "সৈয়দ আমীর আলী", ramadan: "২য়", date: "২০শে ফেব্রুয়ারি" },
        { id: 3, name: "মো: আনিসুর রহমান", ramadan: "৩য়", date: "২১শে ফেব্রুয়ারি" },
        { id: 4, name: "মো: সুলতান আহমদ (কেন)", ramadan: "৪র্থ", date: "২২শে ফেব্রুয়ারি" },
        { id: 5, name: "মো: রুপচান মিয়া", ramadan: "৫ম", date: "২৩শে ফেব্রুয়ারি" },
        { id: 6, name: "মো: সাদেক আলী", ramadan: "৬ষ্ঠ", date: "২৪শে ফেব্রুয়ারি" },
        { id: 7, name: "মো: জুয়েল মিয়া", ramadan: "৭ম", date: "২৫শে ফেব্রুয়ারি" },
        { id: 8, name: "মো: নাঈম মিয়া", ramadan: "৮ম", date: "২৬শে ফেব্রুয়ারি" },
        { id: 9, name: "মো: খোকা মিয়া", ramadan: "৯ম", date: "২৭শে ফেব্রুয়ারি" },
        { id: 10, name: "মো: আজবাজার আলী", ramadan: "১০ম", date: "২৮শে ফেব্রুয়ারি" },
        { id: 11, name: "মো: আব্দুল মোতালেব", ramadan: "১১তম", date: "১লা মার্চ" },
        { id: 12, name: "মো: কডু মিয়া", ramadan: "১২তম", date: "২রা মার্চ" },
        { id: 13, name: "মো: আশ্রাব আলী", ramadan: "১৩তম", date: "৩রা মার্চ" },
        { id: 14, name: "মো: আব্দুল আউয়াল", ramadan: "১৪তম", date: "৪ঠা মার্চ" },
        { id: 15, name: "মো: আব্দুল আউয়াল (২য়)", ramadan: "১৫তম", date: "৫ই মার্চ" },
        { id: 16, name: "মো: বাবুল মিয়া (মনোহারী ব্যাবসায়ী)", ramadan: "১৬তম", date: "৬ই মার্চ" },
        { id: 17, name: "মো: এনামুল হক", ramadan: "১৭তম", date: "৭ই মার্চ" },
        { id: 18, name: "মো: চাঁন মিয়া", ramadan: "১৮তম", date: "৮ই মার্চ" },
        { id: 19, name: "মো: জাহেদুল ইসলাম", ramadan: "১৯তম", date: "৯ই মার্চ" },
        { id: 20, name: "মো: আব্দুর রশিদ", ramadan: "২০তম", date: "১০ই মার্চ" },
        { id: 21, name: "মো: রফিকুল ইসলাম", ramadan: "২১তম", date: "১১ই মার্চ" },
        { id: 22, name: "মো: লুৎফর রহমান", ramadan: "২২তম", date: "১২ই মার্চ" },
        { id: 23, name: "মো: ফারুক হোসেন (সভাপতি)", ramadan: "২৩তম", date: "১৩ই মার্চ" },
        { id: 24, name: "মো: বাবুল মিয়া", ramadan: "২৪তম", date: "১৪ই মার্চ" },
        { id: 25, name: "মো: রফিকুল ইসলাম (আরিফ)", ramadan: "২৫তম", date: "১৫ই মার্চ" },
        { id: 26, name: "মো: রেজাউল করিম (মাস্টার)", ramadan: "২৬তম", date: "১৬ই মার্চ" },
        { id: 27, name: "মো: সাইদুল ইসলাম (বি.জি.বি)", ramadan: "২৭তম", date: "১৭ই মার্চ" },
        { id: 28, name: "মো: ছফিল মিয়া", ramadan: "২৮তম", date: "১৮ই মার্চ" },
        { id: 29, name: "মো: আলমগীর হোসেন", ramadan: "২৯তম", date: "১৯শে মার্চ" },
        { id: 30, name: "মো: আকরাম আলী (উত্তর বাড়ী)", ramadan: "৩০তম", date: "২০শে মার্চ" },
    ],
    footer: "for any kind of information go to https://syedamirali.com",
};

export default data;
