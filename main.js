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
        imamBio: "Leading our congregation with over 15 years of experience in Islamic education and community service.",
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
        event1Title: "Eid ul-Fitr Prayer",
        event1Desc: "Join us for Eid prayer and community celebration. Two prayer sessions will be held.",
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
        address: "Dhaka, Bangladesh",
        addressFull: "Baytul Aman Jame Masjid<br>Dhaka, Bangladesh",
        copyright: "All rights reserved.",
        btnContactUs: "Contact Us"
    },
    bn: {
        // Navigation
        siteName: "বায়তুল আমান জামে মসজিদ",
        navHome: "প্রথম পাতা",
        navAbout: "সম্পর্কে",
        navCommittee: "কমিটি",
        navDonation: "দান",
        navGallery: "গ্যালারি",
        navEvents: "ইভেন্ট",
        navContact: "যোগাযোগ",
        
        // Home Page
        heroTitle: "বায়তুল আমান জামে মসজিদ",
        heroSubtitle: "২০১৬ সালে প্রতিষ্ঠিত — ইবাদত এবং সম্প্রদায়ের ঘর",
        btnLearnMore: "আরও জানুন",
        btnDonate: "এখনই দান করুন",
        prayerTimesTitle: "দৈনিক নামাজের সময়",
        fajr: "ফজর",
        dhuhr: "যোহর",
        asr: "আসর",
        maghrib: "মাগরিব",
        isha: "এশা",
        jummah: "জুম্মা",
        aboutTitle: "আমাদের মসজিদে স্বাগতম",
        aboutPreview: "বায়তুল আমান জামে মসজিদ ২০১৬ সাল থেকে আমাদের সম্প্রদায়কে সেবা দিয়ে আসছে। আমরা ইবাদত, শিক্ষা এবং সামাজিক সম্পৃক্ততার জন্য একটি শান্তিপূর্ণ স্থান প্রদান করতে নিবেদিত। আমাদের লক্ষ্য হল মুসলমানদের মধ্যে ইসলামী মূল্যবোধ, ঐক্য এবং আধ্যাত্মিক বৃদ্ধি বৃদ্ধি করা।",
        btnReadMore: "আরও পড়ুন",
        yearsServing: "বছর সেবা",
        communityMembers: "সম্প্রদায়ের সদস্য",
        donors: "দাতা",
        students: "ছাত্র",
        ctaTitle: "আপনার মসজিদকে সমর্থন করুন",
        ctaText: "আপনার দান আমাদের মসজিদ রক্ষণাবেক্ষণ এবং সম্প্রদায়কে আরও ভালভাবে সেবা করতে সহায়তা করে",
        btnDonateNow: "এখনই দান করুন",
        
        // About Page
        aboutPageTitle: "আমাদের মসজিদ সম্পর্কে",
        aboutPageSubtitle: "আমাদের ইতিহাস, মিশন এবং সম্প্রদায় সম্পর্কে জানুন",
        ourStoryTitle: "আমাদের গল্প",
        ourStoryText1: "বায়তুল আমান জামে মসজিদ ২০১৬ সালে আমাদের সম্প্রদায়ে মুসলমানদের জন্য একটি আধ্যাত্মিক অভয়ারণ্য তৈরি করার দৃষ্টিভঙ্গি নিয়ে প্রতিষ্ঠিত হয়েছিল। একটি ছোট প্রার্থনা স্থান হিসাবে শুরু হয়ে এটি ইবাদত, শিক্ষা এবং সামাজিক সেবার একটি প্রাণবন্ত কেন্দ্রে পরিণত হয়েছে।",
        ourStoryText2: "আমাদের মসজিদ শুধুমাত্র প্রার্থনার স্থান হিসাবে কাজ করে না। এটি আশার একটি আলোকবর্তিকা, ইসলামী শিক্ষার কেন্দ্র এবং একটি সমাবেশ স্থান যেখানে বিভিন্ন পটভূমির মুসলমানরা ঐক্য এবং ভ্রাতৃত্বের সাথে একত্রিত হয়।",
        ourStoryText3: "বছরের পর বছর ধরে, আমরা আমাদের ক্রমবর্ধমান সম্প্রদায়কে আরও ভালভাবে সেবা করার জন্য আমাদের সুবিধা এবং কর্মসূচি প্রসারিত করেছি।",
        missionTitle: "আমাদের মিশন",
        missionText: "ইবাদতের জন্য একটি স্বাগত জানানো স্থান প্রদান করা, ইসলামী জ্ঞান বৃদ্ধি করা, সম্প্রদায়ের বন্ধন শক্তিশালী করা এবং শান্তি, সহানুভূতি এবং মানবতার সেবার মূল্যবোধ প্রচার করা।",
        visionTitle: "আমাদের ভিশন",
        visionText: "একটি নেতৃস্থানীয় ইসলামিক কেন্দ্র হওয়া যা আধ্যাত্মিক বৃদ্ধিকে অনুপ্রাণিত করে, ভবিষ্যত প্রজন্মকে শিক্ষিত করে এবং প্রকৃত ইসলামী শিক্ষা বজায় রেখে বৃহত্তর সম্প্রদায়ে ইতিবাচকভাবে অবদান রাখে।",
        timelineTitle: "আমাদের যাত্রা",
        timeline2016Title: "২০১৬ - ভিত্তি",
        timeline2016Text: "বায়তুল আমান জামে মসজিদ আনুষ্ঠানিকভাবে প্রথম জামাত নামাজের মাধ্যমে প্রতিষ্ঠিত হয়।",
        timeline2018Title: "২০১৮ - সম্প্রসারণ",
        timeline2018Text: "ক্রমবর্ধমান মুসল্লিদের জন্য নামাজের হল সম্প্রসারিত এবং অযু সুবিধা যোগ করা হয়।",
        timeline2020Title: "২০২০ - শিক্ষা কেন্দ্র",
        timeline2020Text: "শিশু এবং প্রাপ্তবয়স্কদের জন্য নিবেদিত ইসলামী শিক্ষা কর্মসূচি চালু করা হয়।",
        timeline2023Title: "২০২৩ - কমিউনিটি প্রোগ্রাম",
        timeline2023Text: "খাদ্য বিতরণ, পরামর্শ এবং যুব কার্যক্রম সহ সম্প্রদায়ের বিস্তৃতি প্রসারিত করা হয়।",
        timeline2025Title: "২০২৫ - ভবিষ্যত পরিকল্পনা",
        timeline2025Text: "একটি আধুনিক বহুমুখী সম্প্রদায় কেন্দ্র তৈরির জন্য চলমান সম্প্রসারণ প্রকল্প।",
        servicesTitle: "আমরা যা অফার করি",
        service1Title: "দৈনিক নামাজ",
        service1Text: "প্রতি শুক্রবার জুম্মার জামাত সহ পাঁচ ওয়াক্ত নামাজ",
        service2Title: "কুরআন ক্লাস",
        service2Text: "সকল বয়সের জন্য তাজউইদ, হিফজ এবং তাফসির ক্লাস",
        service3Title: "ইসলামিক স্টাডিজ",
        service3Text: "ব্যাপক ইসলামী শিক্ষা কর্মসূচি",
        service4Title: "যুব কর্মসূচি",
        service4Text: "তরুণ মুসলমানদের জন্য কার্যক্রম এবং পরামর্শদান",
        service5Title: "সম্প্রদায় সহায়তা",
        service5Text: "পরামর্শ, খাদ্য বিতরণ এবং সহায়তা কর্মসূচি",
        service6Title: "বিশেষ অনুষ্ঠান",
        service6Text: "ঈদ উদযাপন, রমজান কর্মসূচি এবং সমাবেশ",
        leadershipTitle: "আমাদের নেতৃত্ব",
        imamRole: "প্রধান ইমাম",
        imamBio: "ইসলামী শিক্ষা এবং সামাজিক সেবায় ১৫ বছরের অভিজ্ঞতা সহ আমাদের জামাতকে নেতৃত্ব দিচ্ছেন।",
        presidentRole: "সভাপতি",
        presidentBio: "নিষ্ঠা এবং প্রজ্ঞার সাথে মসজিদ পরিচালনা এবং সম্প্রদায়ের উদ্যোগ তত্ত্বাবধান করছেন।",
        secretaryRole: "সাধারণ সম্পাদক",
        secretaryBio: "প্রশাসনিক বিষয় পরিচালনা এবং সম্প্রদায়ের কর্মসূচি সমন্বয় করছেন।",
        
        // Committee Page
        committeePageTitle: "আমাদের সমর্থকরা",
        committeePageSubtitle: "যারা আমাদের মসজিদে উদারভাবে অবদান রেখেছেন তাদের সম্মান করা",
        motowalliMembers: "মোতাওয়াল্লী সদস্য",
        lifetimeMembers: "আজীবন সদস্য",
        totalDonations: "মোট দান (টাকা)",
        motowalliTitle: "মোতাওয়াল্লী সদস্য",
        motowalliSubtitle: "সম্মানিত সদস্যরা যারা ৳১,০০,০০০ বা তার বেশি দান করেছেন",
        motowalliMember: "মোতাওয়াল্লী সদস্য",
        ajibonTitle: "আজীবন সদস্য",
        ajibonSubtitle: "আজীবন সদস্যরা যারা ৳৩০,০০০ দান করেছেন",
        ajibonMember: "আজীবন সদস্য",
        ctaJoinTitle: "আমাদের সম্প্রদায়ে যোগ দিন",
        ctaJoinText: "আজীবন সদস্য হয়ে আমাদের মসজিদের বৃদ্ধি সমর্থন করুন",
        
        // Donation Page
        donationPageTitle: "আমাদের মসজিদকে সমর্থন করুন",
        donationPageSubtitle: "আপনার উদারতা আমাদের সম্প্রদায়কে সেবা করতে এবং মসজিদ রক্ষণাবেক্ষণ করতে সাহায্য করে",
        membershipTitle: "সদস্যপদ বিকল্প",
        generalTitle: "সাধারণ দান",
        anyAmount: "যেকোনো পরিমাণ",
        benefit1: "স্থায়ী স্বীকৃতি",
        benefit2: "সম্মানিত ফলক",
        benefit3: "বিশেষ দোয়া",
        benefit4: "সম্প্রদায়ের সম্মান",
        benefit5: "আজীবন সদস্যপদ",
        benefit6: "নাম স্বীকৃতি",
        benefit7: "ক্রমাগত সমর্থন",
        benefit8: "সম্প্রদায়ের আশীর্বাদ",
        benefit9: "পরিচালনা সমর্থন",
        benefit10: "প্রোগ্রাম সাহায্য",
        benefit11: "সুবিধা রক্ষণাবেক্ষণ",
        benefit12: "পুরস্কার অর্জন",
        projectsTitle: "বর্তমান প্রকল্প",
        project1Title: "নামাজ হল সম্প্রসারণ",
        project1Desc: "জুম্মা এবং ঈদের নামাজের সময় আরও মুসল্লিদের জন্য আমরা আমাদের নামাজ হল সম্প্রসারিত করছি।",
        project2Title: "অযু সুবিধা আপগ্রেড",
        project2Desc: "সকল বয়সের জন্য ভাল নলসাজ এবং আরামের সাথে অযু সুবিধা আধুনিকীকরণ।",
        project3Title: "ইসলামী শিক্ষা কেন্দ্র",
        project3Desc: "কুরআন এবং ইসলামিক অধ্যয়ন কর্মসূচির জন্য নিবেদিত শ্রেণীকক্ষ নির্মাণ।",
        raised: "সংগৃহীত",
        howToDonateTitle: "কীভাবে দান করবেন",
        mobileBankingTitle: "মোবাইল ব্যাংকিং",
        bankTransferTitle: "ব্যাংক ট্রান্সফার",
        bankName: "ব্যাংকের নাম",
        accountName: "অ্যাকাউন্টের নাম",
        accountNumber: "অ্যাকাউন্ট নং",
        branchName: "শাখা",
        cashTitle: "নগদ দান",
        cashDesc: "মসজিদে যান এবং সরাসরি আমাদের কোষাধ্যক্ষকে দান করুন।",
        contactPerson: "যোগাযোগ ব্যক্তি",
        phone: "ফোন",
        hadithText: "মুমিনের কিয়ামতের দিনের ছায়া হবে তার দান।",
        
        // Events Page
        eventsPageTitle: "ইভেন্ট এবং বিজ্ঞপ্তি",
        eventsPageSubtitle: "আমাদের আসন্ন প্রোগ্রাম এবং ঘোষণা সম্পর্কে আপডেট থাকুন",
        upcomingEventsTitle: "আসন্ন ইভেন্ট",
        featured: "বৈশিষ্ট্যযুক্ত",
        march: "মার্চ",
        event1Title: "ঈদুল ফিতর নামাজ",
        event1Desc: "ঈদ নামাজ এবং সম্প্রদায় উদযাপনে আমাদের সাথে যোগ দিন। দুটি নামাজ অধিবেশন অনুষ্ঠিত হবে।",
        event2Title: "যুবকদের জন্য কুরআন প্রতিযোগিতা",
        event2Desc: "৭-১৬ বছর বয়সীদের জন্য বার্ষিক কুরআন তেলাওয়াত এবং হিফজ প্রতিযোগিতা।",
        event3Title: "ইসলামিক ফিনান্স ওয়ার্কশপ",
        event3Desc: "বিশেষজ্ঞদের কাছ থেকে ইসলামী ব্যাংকিং, বিনিয়োগ এবং আর্থিক পরিকল্পনা সম্পর্কে শিখুন।",
        event4Title: "কমিউনিটি ইফতার প্রোগ্রাম",
        event4Desc: "রমজানে সম্প্রদায়ের ইফতার খাবারের জন্য আমাদের সাথে যোগ দিন। সবাই স্বাগত।",
        mainHall: "প্রধান নামাজ হল",
        communityHall: "কমিউনিটি হল",
        meetingRoom: "মিটিং রুম",
        noticesTitle: "গুরুত্বপূর্ণ বিজ্ঞপ্তি",
        notice1Title: "রমজান সময়সূচী আপডেট",
        notice1Desc: "রমজান মাসের জন্য নামাজের সময় আপডেট করা হয়েছে। তারাবীহ নামাজ প্রতিদিন রাত ৮:৩০ টায় শুরু হবে।",
        notice2Title: "নতুন কুরআন ক্লাস শুরু",
        notice2Desc: "শিশুদের জন্য নতুন কুরআন ক্লাসের জন্য নিবন্ধন এখন খোলা। সীমিত আসন উপলব্ধ। বিস্তারিত জানতে অফিসে যোগাযোগ করুন।",
        notice3Title: "সম্প্রসারণ প্রকল্প আপডেট",
        notice3Desc: "আমরা নামাজ হল সম্প্রসারণের জন্য আমাদের লক্ষ্যের ৭১% পৌঁছেছি। আপনার উদার সমর্থনের জন্য সকল দাতাকে ধন্যবাদ!",
        weeklyProgramsTitle: "সাপ্তাহিক প্রোগ্রাম",
        program1Title: "কুরআন অধ্যয়ন সার্কেল",
        program1Time: "প্রতি শুক্রবার মাগরিবের পরে",
        program1Desc: "তাফসির অধ্যয়ন এবং আলোচনার জন্য আমাদের সাথে যোগ দিন",
        program2Title: "বাচ্চাদের জন্য ইসলামিক স্টাডিজ",
        program2Time: "শনিবার এবং রবিবার, সকাল ১০:০০ টা",
        program2Desc: "৬-১৪ বছর বয়সী, কুরআন এবং ইসলামী শিক্ষা",
        program3Title: "বোনদের সমাবেশ",
        program3Time: "প্রতি বুধবার, বিকাল ৩:০০ টা",
        program3Desc: "হালাকা, আলোচনা এবং সম্প্রদায় নির্মাণ",
        program4Title: "আরবি ভাষা ক্লাস",
        program4Time: "মঙ্গলবার এবং বৃহস্পতিবার, সন্ধ্যা ৭:০০ টা",
        program4Desc: "আরবি পড়তে এবং বুঝতে শিখুন",
        
        // Gallery Page
        galleryPageTitle: "ফটো গ্যালারি",
        galleryPageSubtitle: "আমাদের মসজিদ এবং সম্প্রদায় ইভেন্টের মুহূর্ত",
        galleryMosque: "মসজিদ বহির্ভাগ",
        galleryPrayer: "নামাজ হল",
        galleryEid: "ঈদ উদযাপন",
        galleryQuran: "কুরআন ক্লাস",
        galleryIftar: "কমিউনিটি ইফতার",
        galleryInterior: "মসজিদ অভ্যন্তর",
        galleryJummah: "জুম্মা নামাজ",
        galleryRamadan: "রমজান রাত",
        galleryStudies: "ইসলামিক স্টাডিজ",
        
        // Contact Page
        contactPageTitle: "যোগাযোগ করুন",
        contactPageSubtitle: "আমরা সাহায্য করতে এবং আপনার যেকোনো প্রশ্নের উত্তর দিতে এখানে আছি",
        locationTitle: "অবস্থান",
        phoneTitle: "ফোন",
        emailTitle: "ইমেইল",
        hoursTitle: "অফিস সময়",
        officeHours: "শনিবার - বৃহস্পতিবার<br>সকাল ৯:০০ - বিকাল ৫:০০",
        sendMessageTitle: "আমাদের একটি বার্তা পাঠান",
        nameLabel: "আপনার নাম",
        namePlaceholder: "আপনার নাম লিখুন",
        emailLabel: "আপনার ইমেইল",
        emailPlaceholder: "আপনার ইমেইল লিখুন",
        phoneLabel: "ফোন নম্বর",
        phonePlaceholder: "আপনার ফোন নম্বর লিখুন",
        subjectLabel: "বিষয়",
        subjectPlaceholder: "বিষয় লিখুন",
        messageLabel: "বার্তা",
        messagePlaceholder: "আপনার বার্তা লিখুন",
        btnSendMessage: "বার্তা পাঠান",
        findUsTitle: "আমাদের খুঁজুন",
        btnDirections: "নির্দেশনা পান",
        keyContactsTitle: "প্রধান যোগাযোগ",
        faqTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
        faq1Question: "নামাজের সময় কী?",
        faq1Answer: "আমাদের দৈনিক নামাজের সময়: ফজর ৫:০০ টা, যোহর ১২:৩০ টা, আসর ৪:১৫ টা, মাগরিব ৬:০০ টা, এবং এশা ৭:৩০ টা। জুম্মার নামাজ প্রতি শুক্রবার ১:৩০ টায়।",
        faq2Question: "আপনারা কি ইসলামিক ক্লাস অফার করেন?",
        faq2Answer: "হ্যাঁ, আমরা সকল বয়সের জন্য কুরআন ক্লাস, ইসলামিক স্টাডিজ এবং আরবি ভাষা ক্লাস অফার করি। নিবন্ধনের বিস্তারিত জানতে দয়া করে আমাদের সাথে যোগাযোগ করুন।",
        faq3Question: "আমি কীভাবে মসজিদে দান করতে পারি?",
        faq3Answer: "আপনি মোবাইল ব্যাংকিং (বিকাশ, নগদ, রকেট), ব্যাংক ট্রান্সফার, বা মসজিদে সরাসরি দান করতে পারেন। আরও বিস্তারিত জানতে আমাদের দান পৃষ্ঠা দেখুন।",
        faq4Question: "আমি কি ইভেন্টের জন্য মসজিদ বুক করতে পারি?",
        faq4Answer: "হ্যাঁ, আমাদের কমিউনিটি হল ইসলামিক ইভেন্ট, বিয়ে এবং প্রোগ্রামের জন্য উপলব্ধ। প্রাপ্যতা পরীক্ষা এবং রিজার্ভেশন করতে অনুগ্রহ করে অফিসে যোগাযোগ করুন।",
        
        // Footer
        footerAbout: "২০১৬ সাল থেকে ইবাদত, শিক্ষা এবং সম্প্রদায়ের একটি স্থান।",
        quickLinks: "দ্রুত লিঙ্ক",
        contactInfo: "যোগাযোগের তথ্য",
        address: "ঢাকা, বাংলাদেশ",
        addressFull: "বায়তুল আমান জামে মসজিদ<br>ঢাকা, বাংলাদেশ",
        copyright: "সর্বস্বত্ব সংরক্ষিত।",
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
});

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