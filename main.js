// ===================================
// Baytul Aman Jame Masjid - Main JS
// Complete JavaScript for All Pages
// ===================================

// === BILINGUAL TRANSLATIONS ===
const translations = {
    en: {
        // Navigation
        siteName: "Baytul Aman Jame Masjid",
        navHome: "Home",
        navAbout: "About",
        navCommittee: "Committee",
        navDonation: "Donation",
        navGallery: "Gallery",
        navEvents: "Events",
        navContact: "Contact",
        
        // Home Page
        heroTitle: "Baytul Aman Jame Masjid",
        heroSubtitle: "Established in 2016 — A House of Worship and Community",
        btnLearnMore: "Learn More",
        btnDonate: "Donate Now",
        prayerTimesTitle: "Daily Prayer Times",
        fajr: "Fajr",
        dhuhr: "Dhuhr",
        asr: "Asr",
        maghrib: "Maghrib",
        isha: "Isha",
        jummah: "Jummah",
        aboutTitle: "Welcome to Our Masjid",
        aboutPreview: "Baytul Aman Jame Masjid has been serving our community since 2016. We are dedicated to providing a peaceful space for worship, learning, and community engagement. Our mission is to foster Islamic values, unity, and spiritual growth among Muslims and promote understanding with our neighbors.",
        btnReadMore: "Read More",
        yearsServing: "Years Serving",
        communityMembers: "Community Members",
        donors: "Donors",
        students: "Students",
        ctaTitle: "Support Your Masjid",
        ctaText: "Your donations help us maintain the mosque and serve the community better",
        btnDonateNow: "Donate Now",
        
        // About Page
        aboutPageTitle: "About Our Masjid",
        aboutPageSubtitle: "Learn about our history, mission, and community",
        ourStoryTitle: "Our Story",
        ourStoryText1: "Baytul Aman Jame Masjid was established in 2016 with a vision to create a spiritual sanctuary for Muslims in our community. What started as a small prayer space has grown into a vibrant center of worship, learning, and community service.",
        ourStoryText2: "Our masjid serves as more than just a place of prayer. It is a beacon of hope, a center for Islamic education, and a gathering place where Muslims from diverse backgrounds come together in unity and brotherhood.",
        ourStoryText3: "Over the years, we have expanded our facilities and programs to better serve our growing community, offering Quran classes, Islamic studies, youth programs, and community outreach initiatives.",
        missionTitle: "Our Mission",
        missionText: "To provide a welcoming space for worship, foster Islamic knowledge, strengthen community bonds, and promote the values of peace, compassion, and service to humanity.",
        visionTitle: "Our Vision",
        visionText: "To be a leading Islamic center that inspires spiritual growth, educates future generations, and contributes positively to the broader community while maintaining authentic Islamic teachings.",
        timelineTitle: "Our Journey",
        timeline2016Title: "2016 - Foundation",
        timeline2016Text: "Baytul Aman Jame Masjid was officially established with the first congregational prayer held.",
        timeline2018Title: "2018 - Expansion",
        timeline2018Text: "Prayer hall expanded to accommodate growing congregation and added ablution facilities.",
        timeline2020Title: "2020 - Education Center",
        timeline2020Text: "Launched dedicated Islamic education programs for children and adults.",
        timeline2023Title: "2023 - Community Programs",
        timeline2023Text: "Expanded community outreach with food distribution, counseling, and youth activities.",
        timeline2025Title: "2025 - Future Plans",
        timeline2025Text: "Ongoing expansion project to build a modern multi-purpose community center.",
        servicesTitle: "What We Offer",
        service1Title: "Daily Prayers",
        service1Text: "Five daily prayers with Jummah congregation every Friday",
        service2Title: "Quran Classes",
        service2Text: "Tajweed, memorization, and Tafsir classes for all ages",
        service3Title: "Islamic Studies",
        service3Text: "Comprehensive Islamic education programs",
        service4Title: "Youth Programs",
        service4Text: "Activities and mentorship for young Muslims",
        service5Title: "Community Support",
        service5Text: "Counseling, food distribution, and assistance programs",
        service6Title: "Special Events",
        service6Text: "Eid celebrations, Ramadan programs, and gatherings",
        leadershipTitle: "Our Leadership",
        imamRole: "Chief Imam",
        imamBio: "Leading our congregation with over 8 years of experience in Islamic education and community service.",
        chiefPresidentRole: "Chief President",
        presidentRole: "President",
        presidentBio: "Overseeing masjid operations and community initiatives with dedication and wisdom.",
        secretaryRole: "General Secretary",
        secretaryBio: "Managing administrative affairs and coordinating community programs.",
        
        // Committee Page
        committeePageTitle: "Our Supporters",
        committeePageSubtitle: "Honoring those who have generously contributed to our masjid",
        motowalliMembers: "Motowalli Sodossho",
        lifetimeMembers: "Ajibon Sodossho",
        totalDonations: "Total Donations (BDT)",
        motowalliTitle: "Motowalli Sodossho",
        motowalliSubtitle: "Honored members who have donated ৳1,00,000 or more",
        motowalliMember: "Motowalli Sodossho",
        ajibonTitle: "Ajibon Sodossho",
        ajibonSubtitle: "Lifetime members who have donated ৳30,000",
        ajibonMember: "Ajibon Sodossho",
        ctaJoinTitle: "Join Our Community",
        ctaJoinText: "Become a lifetime member and support the growth of our masjid",
        
        // Donation Page
        donationPageTitle: "Support Our Masjid",
        donationPageSubtitle: "Your generosity helps us serve the community and maintain our masjid",
        membershipTitle: "Membership Options",
        generalTitle: "General Donation",
        anyAmount: "Any Amount",
        benefit1: "Permanent recognition",
        benefit2: "Honored plaque",
        benefit3: "Special prayers",
        benefit4: "Community honor",
        benefit5: "Lifetime membership",
        benefit6: "Name recognition",
        benefit7: "Continuous support",
        benefit8: "Community blessings",
        benefit9: "Support operations",
        benefit10: "Help programs",
        benefit11: "Maintain facility",
        benefit12: "Earn rewards",
        projectsTitle: "Current Projects",
        project1Title: "Expansion of Prayer Hall",
        project1Desc: "We are expanding our prayer hall to accommodate more worshippers during Jummah and Eid prayers.",
        project2Title: "Ablution Facility Upgrade",
        project2Desc: "Modernizing ablution facilities with better plumbing and comfort for all ages.",
        project3Title: "Islamic Education Center",
        project3Desc: "Building dedicated classrooms for Quran and Islamic studies programs.",
        raised: "Raised",
        howToDonateTitle: "How to Donate",
        mobileBankingTitle: "Mobile Banking",
        bankTransferTitle: "Bank Transfer",
        bankName: "Bank Name",
        accountName: "Account Name",
        accountNumber: "Account No",
        branchName: "Branch",
        cashTitle: "Cash Donation",
        cashDesc: "Visit the masjid and donate directly to our treasurer.",
        contactPerson: "Contact Person",
        phone: "Phone",
        hadithText: "The believer's shade on the Day of Resurrection will be his charity.",
        
        // Events Page
        eventsPageTitle: "Events & Notices",
        eventsPageSubtitle: "Stay updated with our upcoming programs and announcements",
        upcomingEventsTitle: "Upcoming Events",
        featured: "Featured",
        march: "March",
        event1Title: "Masjid Construction Discussion",
        event1Desc: "Join us for a discussion meeting regarding the construction of the new mosque. Your valuable opinions are highly appreciated.",
        event2Title: "Quran Competition for Youth",
        event2Desc: "Annual Quran recitation and memorization competition for ages 7-16.",
        event3Title: "Islamic Finance Workshop",
        event3Desc: "Learn about Islamic banking, investment, and financial planning from experts.",
        event4Title: "Community Iftar Program",
        event4Desc: "Join us for a community iftar meal during Ramadan. All are welcome.",
        mainHall: "Main Prayer Hall",
        communityHall: "Community Hall",
        meetingRoom: "Meeting Room",
        noticesTitle: "Important Notices",
        notice1Title: "Ramadan Schedule Updated",
        notice1Desc: "Prayer times have been updated for the month of Ramadan. Taraweeh prayers will begin at 8:30 PM daily.",
        notice2Title: "New Quran Classes Starting",
        notice2Desc: "Registration is now open for new Quran classes for children. Limited seats available. Contact the office for details.",
        notice3Title: "Expansion Project Update",
        notice3Desc: "We have reached 71% of our goal for the prayer hall expansion. Thank you to all donors for your generous support!",
        weeklyProgramsTitle: "Weekly Programs",
        program1Title: "Quran Study Circle",
        program1Time: "Every Friday after Maghrib",
        program1Desc: "Join us for Tafsir study and discussion",
        program2Title: "Islamic Studies for Kids",
        program2Time: "Saturday & Sunday, 10:00 AM",
        program2Desc: "Ages 6-14, Quran and Islamic education",
        program3Title: "Sisters Gathering",
        program3Time: "Every Wednesday, 3:00 PM",
        program3Desc: "Halaqa, discussion, and community building",
        program4Title: "Arabic Language Class",
        program4Time: "Tuesday & Thursday, 7:00 PM",
        program4Desc: "Learn to read and understand Arabic",
        
        // Gallery Page
        galleryPageTitle: "Photo Gallery",
        galleryPageSubtitle: "Moments from our masjid and community events",
        galleryMosque: "Mosque Exterior",
        galleryPrayer: "Prayer Hall",
        galleryEid: "Eid Celebration",
        galleryQuran: "Quran Class",
        galleryIftar: "Community Iftar",
        galleryInterior: "Mosque Interior",
        galleryJummah: "Jummah Prayer",
        galleryRamadan: "Ramadan Night",
        galleryStudies: "Islamic Studies",
        
        // Contact Page
        contactPageTitle: "Contact Us",
        contactPageSubtitle: "We're here to help and answer any questions you might have",
        locationTitle: "Location",
        phoneTitle: "Phone",
        emailTitle: "Email",
        hoursTitle: "Office Hours",
        officeHours: "Saturday - Thursday<br>9:00 AM - 5:00 PM",
        sendMessageTitle: "Send Us a Message",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        subjectLabel: "Subject",
        subjectPlaceholder: "Enter subject",
        messageLabel: "Message",
        messagePlaceholder: "Enter your message",
        btnSendMessage: "Send Message",
        findUsTitle: "Find Us",
        btnDirections: "Get Directions",
        keyContactsTitle: "Key Contacts",
        faqTitle: "Frequently Asked Questions",
        faq1Question: "What are the prayer times?",
        faq1Answer: "Our daily prayer times are: Fajr at 5:00 AM, Dhuhr at 12:30 PM, Asr at 4:15 PM, Maghrib at 6:00 PM, and Isha at 7:30 PM. Jummah prayer is at 1:30 PM every Friday.",
        faq2Question: "Do you offer Islamic classes?",
        faq2Answer: "Yes, we offer Quran classes, Islamic studies, and Arabic language classes for all ages. Please contact us for registration details.",
        faq3Question: "How can I donate to the masjid?",
        faq3Answer: "You can donate through mobile banking (bKash, Nagad, Rocket), bank transfer, or in person at the masjid. Visit our Donation page for more details.",
        faq4Question: "Can I book the masjid for events?",
        faq4Answer: "Yes, our community hall is available for Islamic events, weddings, and programs. Please contact the office to check availability and make reservations.",
        
        // Footer
        footerAbout: "A place of worship, learning, and community since 2016.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        address: "Shapla Society, UttarKhan<br>Dhaka, Bangladesh",
        addressFull: "Baytul Aman Jame Masjid<br>Dhaka, Bangladesh",
        copyright: "All rights reserved.",
        btnContactUs: "Contact Us"
    },
    bn: {
        siteName: "বায়তুল আমান জামে মসজিদ",
        navHome: "প্রথম পাতা",
        navAbout: "আমাদের সম্পর্কে",
        navCommittee: "কমিটি",
        navDonation: "দান করুন",
        navGallery: "গ্যালারি",
        navEvents: "ইভেন্ট",
        navContact: "যোগাযোগ",

        // Home Page
        heroTitle: "বায়তুল আমান জামে মসজিদ",
        heroSubtitle: "২০১৬ সাল থেকে ইবাদত, শিক্ষা ও ঐক্যের মশালবাহী একটি পবিত্র স্থান",
        btnLearnMore: "বিস্তারিত জানুন",
        btnDonate: "দান করুন",
        prayerTimesTitle: "দৈনিক নামাজের সময়সূচি",
        fajr: "ফজর",
        dhuhr: "যোহর",
        asr: "আসর",
        maghrib: "মাগরিব",
        isha: "এশা",
        jummah: "জুম্মা",
        aboutTitle: "আমাদের মসজিদে আপনাকে স্বাগতম",
        aboutPreview: "বায়তুল আমান জামে মসজিদ প্রতিষ্ঠার পর থেকেই আমরা আল্লাহর সন্তুষ্টি অর্জনের লক্ষ্যে ইবাদত, শিক্ষা ও সমাজসেবার মাধ্যমে মুসলমানদের একত্রিত করে চলেছি। এখানে প্রতিটি নামাজি ভাই ও বোন একে অপরের প্রতি ভালোবাসা, সহমর্মিতা ও ঐক্যের বন্ধনে আবদ্ধ।",
        btnReadMore: "আরও পড়ুন",
        yearsServing: "সেবার বছর",
        communityMembers: "সমাজের সদস্য",
        donors: "দানশীল ভাই-বোন",
        students: "শিক্ষার্থী",
        ctaTitle: "আপনার দান মসজিদের জন্য বরকতময়",
        ctaText: "আপনার ক্ষুদ্র সহায়তাও মসজিদের কার্যক্রম ও সমাজের সেবায় বড় অবদান রাখে।",
        btnDonateNow: "দান করুন এখনই",

        // About Page
        aboutPageTitle: "আমাদের মসজিদ সম্পর্কে",
        aboutPageSubtitle: "আমাদের ইতিহাস, উদ্দেশ্য ও সমাজসেবার গল্প জানুন",
        ourStoryTitle: "আমাদের যাত্রার গল্প",
        ourStoryText1: "২০১৬ সালে আমরা মসজিদটি প্রতিষ্ঠা করি একটি পবিত্র উদ্দেশ্যে — যেন মানুষ আল্লাহর সন্তুষ্টির জন্য একত্র হয়ে ইবাদত করতে পারে। ছোট একটি নামাজখানা থেকে আজ এটি হয়ে উঠেছে ইবাদত, শিক্ষা ও সমাজকল্যাণের কেন্দ্র।",
        ourStoryText2: "আমাদের মসজিদ শুধু নামাজের স্থান নয়; এটি এক আলোকবর্তিকা, ইসলামী শিক্ষার কেন্দ্র, এবং ঐক্যের প্রতীক।",
        ourStoryText3: "আমরা সমাজের প্রতিটি স্তরের মানুষকে সেবা দেওয়ার লক্ষ্যে আমাদের কার্যক্রম ধারাবাহিকভাবে বৃদ্ধি করে চলেছি।",
        missionTitle: "আমাদের উদ্দেশ্য",
        missionText: "ইবাদত ও শিক্ষার মাধ্যমে সমাজে শান্তি, ভালোবাসা, ন্যায় ও মানবতার আলো ছড়ানো।",
        visionTitle: "আমাদের লক্ষ্য",
        visionText: "একটি আধুনিক ইসলামিক কেন্দ্র হিসেবে সমাজে আধ্যাত্মিক ও শিক্ষাগত নেতৃত্ব প্রদান করা, এবং নবীন প্রজন্মকে ইসলামী চেতনায় গড়ে তোলা।",
        timelineTitle: "আমাদের ইতিহাসের ধারা",
        timeline2016Title: "২০১৬ - সূচনা",
        timeline2016Text: "প্রথম জামাতে নামাজের মাধ্যমে বায়তুল আমান জামে মসজিদের আনুষ্ঠানিক যাত্রা শুরু।",
        timeline2018Title: "২০১৮ - সম্প্রসারণ",
        timeline2018Text: "নামাজের হল ও অযুর স্থান সম্প্রসারিত করা হয় মুসল্লিদের সুবিধার্থে।",
        timeline2020Title: "২০২০ - শিক্ষা কেন্দ্রের সূচনা",
        timeline2020Text: "শিশু ও প্রাপ্তবয়স্কদের জন্য ইসলামী শিক্ষা কর্মসূচি শুরু হয়।",
        timeline2023Title: "২০২৩ - সমাজসেবা কর্মসূচি",
        timeline2023Text: "খাদ্য বিতরণ, পরামর্শ ও যুব কার্যক্রমসহ নতুন উদ্যোগ শুরু।",
        timeline2025Title: "২০২৫ - ভবিষ্যৎ পরিকল্পনা",
        timeline2025Text: "বহুমুখী কমিউনিটি সেন্টার নির্মাণের কাজ চলমান।",
        servicesTitle: "আমাদের সেবাসমূহ",
        service1Title: "দৈনিক নামাজ",
        service1Text: "পাঁচ ওয়াক্ত নামাজ ও প্রতি শুক্রবার জুম্মার জামাত।",
        service2Title: "কুরআন শিক্ষা",
        service2Text: "তাজউইদ, হিফজ ও তাফসির ক্লাস — সকল বয়সের জন্য।",
        service3Title: "ইসলামী পাঠক্রম",
        service3Text: "ইসলামী জ্ঞানচর্চা ও চরিত্র গঠনের জন্য বিশেষ ক্লাস।",
        service4Title: "যুব কার্যক্রম",
        service4Text: "তরুণদের জন্য অনুপ্রেরণামূলক ইসলামিক কার্যক্রম ও পরামর্শ।",
        service5Title: "সমাজসেবা",
        service5Text: "পরামর্শদান, খাদ্য সহায়তা ও দরিদ্রদের সহায়তা কর্মসূচি।",
        service6Title: "বিশেষ অনুষ্ঠান",
        service6Text: "ঈদ, রমজান ও ধর্মীয় সমাবেশের আয়োজন।",
        leadershipTitle: "আমাদের নেতৃত্ব",
        imamRole: "প্রধান ইমাম",
        imamBio: "ইসলামী শিক্ষা ও সমাজসেবায় অভিজ্ঞ একজন শ্রদ্ধেয় আলেম।",
        chiefPresidentRole: "প্রধান সভাপতি",
        presidentRole: "সভাপতি",
        presidentBio: "মসজিদের সব কার্যক্রমে তত্ত্বাবধান ও দিকনির্দেশনা প্রদান করেন।",
        secretaryRole: "সাধারণ সম্পাদক",
        secretaryBio: "প্রশাসনিক দায়িত্ব পালন ও সমাজের সঙ্গে সংযোগ রক্ষা করেন।",

        // Committee Page
        committeePageTitle: "আমাদের দাতা ও কমিটি সদস্য",
        committeePageSubtitle: "যারা মসজিদের উন্নয়নে আন্তরিক অবদান রেখেছেন",
        motowalliMembers: "মোতাওয়াল্লী সদস্য",
        lifetimeMembers: "আজীবন সদস্য",
        totalDonations: "মোট দান (৳)",
        motowalliTitle: "মোতাওয়াল্লী সদস্যবৃন্দ",
        motowalliSubtitle: "যাঁরা ৳১,০০,০০০ বা তার বেশি দান করেছেন",
        motowalliMember: "মোতাওয়াল্লী সদস্য",
        ajibonTitle: "আজীবন সদস্যবৃন্দ",
        ajibonSubtitle: "যাঁরা ৳৩০,০০০ দান করেছেন",
        ajibonMember: "আজীবন সদস্য",
        ctaJoinTitle: "আমাদের পরিবারের অংশ হোন",
        ctaJoinText: "আজীবন সদস্য হয়ে মসজিদের উন্নয়নে অংশ নিন।",

        // Donation Page
        donationPageTitle: "মসজিদের জন্য আপনার দান",
        donationPageSubtitle: "আপনার দান মসজিদের রক্ষণাবেক্ষণ ও সমাজসেবায় সহায়তা করে।",
        membershipTitle: "সদস্যপদ সুবিধা",
        generalTitle: "সাধারণ দান",
        anyAmount: "যেকোনো পরিমাণ",
        benefit1: "স্থায়ী স্বীকৃতি",
        benefit2: "সম্মানিত ফলক",
        benefit3: "বিশেষ দোয়া",
        benefit4: "সমাজের শ্রদ্ধা",
        benefit5: "আজীবন সদস্যপদ",
        benefit6: "নাম অন্তর্ভুক্তি",
        benefit7: "ধারাবাহিক সহযোগিতা",
        benefit8: "বরকত ও সম্মান",
        benefit9: "পরিচালনায় সহায়তা",
        benefit10: "কার্যক্রমে সহযোগিতা",
        benefit11: "সুবিধা রক্ষণাবেক্ষণ",
        benefit12: "আখিরাতে পুরস্কার",
        projectsTitle: "চলমান প্রকল্প",
        project1Title: "নামাজ হল সম্প্রসারণ",
        project1Desc: "জুম্মা ও ঈদের সময় মুসল্লিদের জন্য বড় পরিসর তৈরি করা হচ্ছে।",
        project2Title: "অযু স্থান আধুনিকীকরণ",
        project2Desc: "আরও আরামদায়ক ও পরিচ্ছন্ন অযুর ব্যবস্থা।",
        project3Title: "ইসলামী শিক্ষা কেন্দ্র",
        project3Desc: "শিশু ও প্রাপ্তবয়স্কদের জন্য ইসলামিক পাঠাগার নির্মাণ।",
        raised: "সংগৃহীত অর্থ",
        howToDonateTitle: "দান করার উপায়",
        mobileBankingTitle: "মোবাইল ব্যাংকিং",
        bankTransferTitle: "ব্যাংক ট্রান্সফার",
        bankName: "ব্যাংকের নাম",
        accountName: "অ্যাকাউন্টের নাম",
        accountNumber: "অ্যাকাউন্ট নম্বর",
        branchName: "শাখা",
        cashTitle: "নগদ দান",
        cashDesc: "মসজিদে এসে সরাসরি কোষাধ্যক্ষের কাছে দান করুন।",
        contactPerson: "যোগাযোগের ব্যক্তি",
        phone: "ফোন",
        hadithText: "“কিয়ামতের দিন মুমিনের ছায়া হবে তার দান।” — হাদিস",

        // Events Page
        eventsPageTitle: "ইভেন্ট ও ঘোষণা",
        eventsPageSubtitle: "আমাদের আসন্ন প্রোগ্রাম ও গুরুত্বপূর্ণ সংবাদ",
        upcomingEventsTitle: "আসন্ন ইভেন্টসমূহ",
        featured: "বিশেষ",
        march: "মার্চ",
        event1Title: "নতুন মসজিদ নির্মাণ আলোচনা",
        event1Desc: "নতুন মসজিদ নির্মাণের বিষয়ে আলোচনায় অংশ নিন। আপনার মূল্যবান মতামত প্রদানের জন্য আমন্ত্রণ।",
        event2Title: "যুব কুরআন প্রতিযোগিতা",
        event2Desc: "৭ থেকে ১৬ বছর বয়সীদের জন্য বার্ষিক হিফজ ও তেলাওয়াত প্রতিযোগিতা।",
        event3Title: "ইসলামিক ফিনান্স কর্মশালা",
        event3Desc: "ইসলামী ব্যাংকিং ও আর্থিক পরিকল্পনা নিয়ে বিশেষজ্ঞদের আলোচনা।",
        event4Title: "রমজান ইফতার আয়োজন",
        event4Desc: "রমজানে মিলিত ইফতার ও দোয়ার অনুষ্ঠানে অংশ নিন।",
        mainHall: "প্রধান নামাজ হল",
        communityHall: "কমিউনিটি হল",
        meetingRoom: "মিটিং রুম",
        noticesTitle: "বিজ্ঞপ্তি",
        notice1Title: "রমজান সময়সূচী",
        notice1Desc: "তারাবীহ শুরু রাত ৮:৩০ টায়। নামাজের সময় নতুনভাবে নির্ধারিত হয়েছে।",
        notice2Title: "নতুন কুরআন ক্লাস শুরু",
        notice2Desc: "শিশুদের জন্য নতুন ক্লাসের নিবন্ধন শুরু হয়েছে। সীমিত আসন।",
        notice3Title: "মসজিদ সম্প্রসারণ আপডেট",
        notice3Desc: "সম্প্রসারণ তহবিলের ৭১% ইতিমধ্যে সংগৃহীত। দাতাদের জাযাকাল্লাহু খাইর।",
        weeklyProgramsTitle: "সাপ্তাহিক কার্যক্রম",
        program1Title: "কুরআন অধ্যয়ন সভা",
        program1Time: "প্রতি শুক্রবার মাগরিবের পর",
        program1Desc: "তাফসির ও আলোচনা সভা।",
        program2Title: "শিশুদের ইসলামিক ক্লাস",
        program2Time: "শনিবার ও রবিবার সকাল ১০টা",
        program2Desc: "৬–১৪ বছর বয়সী শিশুদের জন্য।",
        program3Title: "বোনদের হালাকা",
        program3Time: "বুধবার বিকাল ৩টা",
        program3Desc: "আলোচনা, দোয়া ও শেখার সুযোগ।",
        program4Title: "আরবি ভাষা ক্লাস",
        program4Time: "মঙ্গলবার ও বৃহস্পতিবার সন্ধ্যা ৭টা",
        program4Desc: "আরবি পড়া ও বুঝতে শেখা।",

        // Gallery Page
        galleryPageTitle: "ছবির গ্যালারি",
        galleryPageSubtitle: "আমাদের মসজিদ ও ইভেন্টের কিছু মুহূর্ত",
        galleryMosque: "মসজিদের বাহির",
        galleryPrayer: "নামাজের দৃশ্য",
        galleryEid: "ঈদের আনন্দ",
        galleryQuran: "কুরআন শিক্ষা",
        galleryIftar: "ইফতার আয়োজন",
        galleryInterior: "অভ্যন্তর দৃশ্য",
        galleryJummah: "জুম্মার নামাজ",
        galleryRamadan: "রমজানের রাত",
        galleryStudies: "ইসলামী পাঠচক্র",

        // Contact Page
        contactPageTitle: "যোগাযোগ করুন",
        contactPageSubtitle: "আমরা সর্বদা আপনার পাশে আছি। প্রশ্ন থাকলে জানান।",
        locationTitle: "অবস্থান",
        phoneTitle: "ফোন",
        emailTitle: "ইমেইল",
        hoursTitle: "অফিস সময়",
        officeHours: "শনিবার - বৃহস্পতিবার<br>সকাল ৯টা থেকে বিকাল ৫টা পর্যন্ত",
        sendMessageTitle: "বার্তা পাঠান",
        nameLabel: "আপনার নাম",
        namePlaceholder: "আপনার নাম লিখুন",
        emailLabel: "ইমেইল",
        emailPlaceholder: "আপনার ইমেইল লিখুন",
        phoneLabel: "ফোন নম্বর",
        phonePlaceholder: "আপনার ফোন নম্বর লিখুন",
        subjectLabel: "বিষয়",
        subjectPlaceholder: "বিষয় লিখুন",
        messageLabel: "বার্তা",
        messagePlaceholder: "আপনার বার্তা লিখুন",
        btnSendMessage: "বার্তা পাঠান",
        findUsTitle: "আমাদের অবস্থান",
        btnDirections: "নির্দেশনা দেখুন",
        keyContactsTitle: "প্রধান যোগাযোগ",
        faqTitle: "প্রশ্নোত্তর",
        faq1Question: "নামাজের সময় কখন?",
        faq1Answer: "ফজর ৫:০০, যোহর ১২:৩০, আসর ৪:১৫, মাগরিব ৬:০০, এশা ৭:৩০। জুম্মা ১:৩০ টা।",
        faq2Question: "আপনারা কি ইসলামিক ক্লাস নেন?",
        faq2Answer: "হ্যাঁ, শিশু ও প্রাপ্তবয়স্কদের জন্য কুরআন, তাফসির ও আরবি শিক্ষা দেওয়া হয়।",
        faq3Question: "কীভাবে দান করা যায়?",
        faq3Answer: "বিকাশ, নগদ, রকেট, ব্যাংক বা সরাসরি মসজিদে এসে দান করতে পারেন।",
        faq4Question: "ইভেন্টের জন্য হল ভাড়া দেওয়া হয়?",
        faq4Answer: "হ্যাঁ, ইসলামিক অনুষ্ঠান ও বিয়ের জন্য হল ভাড়া পাওয়া যায়। বিস্তারিত জানতে যোগাযোগ করুন।",

        // Footer
        footerAbout: "২০১৬ সাল থেকে ইবাদত, শিক্ষা ও সমাজকল্যাণের পথে বায়তুল আমান জামে মসজিদ।",
        quickLinks: "দ্রুত লিঙ্ক",
        contactInfo: "যোগাযোগের তথ্য",
        address: "শাপলা সোসাইটি, উত্তরখান, ঢাকা, বাংলাদেশ",
        addressFull: "বায়তুল আমান জামে মসজিদ<br>ঢাকা, বাংলাদেশ",
        copyright: "© সর্বস্বত্ব সংরক্ষিত।",
        btnContactUs: "যোগাযোগ করুন"

    }
};

// === GLOBAL VARIABLES ===
let currentLang = 'en';

// === DOM CONTENT LOADED ===
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initLanguage();
    initNavigation();
    initScrollEffects();
    initAnimations();
    initCounters();
    initProgressBars();
    initLightbox();
    initFAQ();
    initContactForm();
    initClock();
    initCommitteeFilters();
});

// === COMMITTEE PAGE FILTER FUNCTIONALITY ===
function initCommitteeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const motowalliSection = document.getElementById('motowalliSection');
    const ajibonSection = document.getElementById('ajibonSection');
    
    if (!filterBtns.length || !motowalliSection || !ajibonSection) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            if (filter === 'all') {
                motowalliSection.classList.remove('hidden');
                ajibonSection.classList.remove('hidden');
            } else if (filter === 'motowalli') {
                motowalliSection.classList.remove('hidden');
                ajibonSection.classList.add('hidden');
            } else if (filter === 'ajibon') {
                motowalliSection.classList.add('hidden');
                ajibonSection.classList.remove('hidden');
            }
            
            // Smooth scroll to first visible section
            setTimeout(() => {
                const firstVisible = document.querySelector('.members-section:not(.hidden)');
                if (firstVisible) {
                    firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        });
    });
}

// === LANGUAGE SWITCHING ===
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    const currentLangSpan = document.getElementById('currentLang');
    
    // Load saved language
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    updateLanguage();
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'bn' : 'en';
            localStorage.setItem('language', currentLang);
            updateLanguage();
            
            // Update button text
            if (currentLangSpan) {
                currentLangSpan.textContent = currentLang === 'en' ? 'EN' : 'বাং';
            }
        });
    }
    
    // Set initial button text
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLang === 'en' ? 'EN' : 'বাং';
    }
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-lang-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
}

// === NAVIGATION ===
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// === SCROLL EFFECTS ===
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// === ANIMATIONS ===
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// === COUNTERS ===
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// === PROGRESS BARS ===
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// === LIGHTBOX (GALLERY) ===
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryImages = Array.from(galleryItems).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt,
        caption: item.querySelector('.gallery-overlay h3')?.textContent || ''
    }));
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (lightbox && galleryImages[index]) {
        lightboxImg.src = galleryImages[index].src;
        lightboxImg.alt = galleryImages[index].alt;
        lightboxCaption.textContent = galleryImages[index].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function changeLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    openLightbox(currentImageIndex);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightbox(1);
        }
    }
});

// === FAQ ACCORDION ===
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked FAQ if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// === CONTACT FORM ===
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:info@baytulaman.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
            )}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert(currentLang === 'en' 
                ? 'Your email client will open. Please send the email to complete your message.' 
                : 'আপনার ইমেইল ক্লায়েন্ট খুলবে। আপনার বার্তা সম্পূর্ণ করতে ইমেইল পাঠান।'
            );
            
            // Reset form
            contactForm.reset();
        });
    }
}

// === REAL-TIME CLOCK ===
function initClock() {
    const clockElement = document.getElementById('currentTime');
    
    if (clockElement) {
        updateClock();
        setInterval(updateClock, 1000);
    }
}

function updateClock() {
    const clockElement = document.getElementById('currentTime');
    if (clockElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        if (currentLang === 'bn') {
            clockElement.textContent = now.toLocaleString('bn-BD', options);
        } else {
            clockElement.textContent = now.toLocaleString('en-US', options);
        }
    }
}

// === UTILITY FUNCTIONS ===

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll to top button (if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Show notification (utility)
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#51cf66' : type === 'error' ? '#ff6b6b' : '#4dabf7'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === PRINT FUNCTION ===
function printPage() {
    window.print();
}

// === SHARE FUNCTION ===
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification(
                currentLang === 'en' ? 'Link copied to clipboard!' : 'লিঙ্ক কপি করা হয়েছে!',
                'success'
            );
        });
    }
}

// === BACK TO TOP BUTTON ===
window.addEventListener('scroll', debounce(function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
}, 100));

// === PREVENT CONSOLE LOGS IN PRODUCTION ===
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
}

// === SERVICE WORKER (OPTIONAL FOR OFFLINE SUPPORT) ===
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').then(
        //     registration => console.log('ServiceWorker registered'),
        //     err => console.log('ServiceWorker registration failed')
        // );
    });
}

// === EXPORT FUNCTIONS FOR INLINE USE ===
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeLightbox = changeLightbox;
window.scrollToTop = scrollToTop;
window.sharePage = sharePage;
window.printPage = printPage;

// === LOG INITIALIZATION ===
console.log('%c🕌 Baytul Aman Jame Masjid Website', 'color: #2d5f2e; font-size: 20px; font-weight: bold;');
console.log('%cWebsite initialized successfully!', 'color: #d4af37; font-size: 14px;');
console.log('%cMay Allah accept our efforts. Ameen.', 'color: #666; font-size: 12px; font-style: italic;');