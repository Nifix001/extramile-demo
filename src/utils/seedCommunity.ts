// utils/seedCommunity.ts

import { Post } from '@/src/types/community';

export const seedCommunityPosts = (): void => {
  const POSTS_KEY = 'extramile_community_posts';
  
  // Check if posts already exist
  const existingPosts = localStorage.getItem(POSTS_KEY);
  if (existingPosts && JSON.parse(existingPosts).length > 0) {
    return; // Don't seed if posts already exist
  }

  // Create seed posts with timestamps spread over the last few days
  const now = new Date();
  
  const seedPosts: Post[] = [
    {
      id: '1',
      userId: 'user_john',
      userName: 'John D.',
      content: 'Just bought a solar panel! Installation was smooth. Highly recommended! The team was professional and the credit option made it so easy for me to afford.',
      timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
      likes: ['user_sarah', 'user_ahmed', 'user_blessing'],
      replies: [
        {
          id: 'reply_1_1',
          postId: '1',
          userId: 'user_sarah',
          userName: 'Sarah M.',
          content: 'That\'s great! Which solar panel did you get? I\'m thinking about getting one too.',
          timestamp: new Date(now.getTime() - 1.5 * 60 * 60 * 1000),
          likes: ['user_john']
        },
        {
          id: 'reply_1_2',
          postId: '1',
          userId: 'user_john',
          userName: 'John D.',
          content: 'I got the 200W panel. Perfect for my home needs. Happy to answer any questions!',
          timestamp: new Date(now.getTime() - 1 * 60 * 60 * 1000),
          likes: ['user_sarah', 'user_ahmed']
        }
      ]
    },
    {
      id: '2',
      userId: 'user_sarah',
      userName: 'Sarah M.',
      content: 'The credit option made it easy for me to get my dream laptop. Thank you ExtraMile! Customer service was excellent and the approval process was super fast.',
      timestamp: new Date(now.getTime() - 5 * 60 * 60 * 1000), // 5 hours ago
      likes: ['user_john', 'user_blessing'],
      replies: [
        {
          id: 'reply_2_1',
          postId: '2',
          userId: 'user_blessing',
          userName: 'Blessing O.',
          content: 'How long did the approval take? I\'m planning to get a laptop too.',
          timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000),
          likes: ['user_sarah']
        },
        {
          id: 'reply_2_2',
          postId: '2',
          userId: 'user_sarah',
          userName: 'Sarah M.',
          content: 'Less than 24 hours! They\'re very efficient.',
          timestamp: new Date(now.getTime() - 3.5 * 60 * 60 * 1000),
          likes: ['user_blessing', 'user_john']
        }
      ]
    },
    {
      id: '3',
      userId: 'user_ahmed',
      userName: 'Ahmed K.',
      content: 'Anyone has experience with the 5KVA generator? Thinking of buying one. Need something reliable for my small business.',
      timestamp: new Date(now.getTime() - 24 * 60 * 60 * 1000), // 1 day ago
      likes: ['user_sarah', 'user_john'],
      replies: [
        {
          id: 'reply_3_1',
          postId: '3',
          userId: 'user_chidi',
          userName: 'Chidi N.',
          content: 'I bought one last month. Works perfectly! Very fuel efficient and quiet. Great for business use.',
          timestamp: new Date(now.getTime() - 23 * 60 * 60 * 1000),
          likes: ['user_ahmed', 'user_sarah']
        }
      ]
    },
    {
      id: '4',
      userId: 'user_blessing',
      userName: 'Blessing O.',
      content: 'Customer service is excellent! They helped me choose the right washing machine for my family. The delivery was on time and installation was free!',
      timestamp: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      likes: ['user_john', 'user_sarah', 'user_ahmed', 'user_chidi'],
      replies: [
        {
          id: 'reply_4_1',
          postId: '4',
          userId: 'user_john',
          userName: 'John D.',
          content: 'Their customer service is truly top-notch! Had a similar experience.',
          timestamp: new Date(now.getTime() - 1.8 * 24 * 60 * 60 * 1000),
          likes: ['user_blessing']
        }
      ]
    },
    {
      id: '5',
      userId: 'user_chidi',
      userName: 'Chidi N.',
      content: 'Just received my refrigerator! The credit payment plan is very flexible. I can comfortably pay monthly without stress. Highly recommend ExtraMile to anyone!',
      timestamp: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      likes: ['user_sarah', 'user_blessing'],
      replies: []
    },
    {
      id: '6',
      userId: 'user_fatima',
      userName: 'Fatima A.',
      content: 'Does anyone know if they deliver to Abuja? I want to buy an air conditioner but I\'m not in Lagos.',
      timestamp: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
      likes: ['user_ahmed'],
      replies: [
        {
          id: 'reply_6_1',
          postId: '6',
          userId: 'user_blessing',
          userName: 'Blessing O.',
          content: 'Yes they do! Contact their customer service. They deliver nationwide.',
          timestamp: new Date(now.getTime() - 3.8 * 24 * 60 * 60 * 1000),
          likes: ['user_fatima', 'user_ahmed']
        },
        {
          id: 'reply_6_2',
          postId: '6',
          userId: 'user_fatima',
          userName: 'Fatima A.',
          content: 'Thank you so much! Will contact them today.',
          timestamp: new Date(now.getTime() - 3.5 * 24 * 60 * 60 * 1000),
          likes: ['user_blessing']
        }
      ]
    },
    {
      id: '7',
      userId: 'user_emeka',
      userName: 'Emeka O.',
      content: 'The iPhone 13 Pro I got last month is still working perfectly! No issues at all. The quality is authentic and the price was fair. 10/10 would buy again!',
      timestamp: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      likes: ['user_john', 'user_sarah', 'user_chidi'],
      replies: [
        {
          id: 'reply_7_1',
          postId: '7',
          userId: 'user_sarah',
          userName: 'Sarah M.',
          content: 'Great to hear! I\'m planning to get one next month.',
          timestamp: new Date(now.getTime() - 4.5 * 24 * 60 * 60 * 1000),
          likes: ['user_emeka']
        }
      ]
    },
    {
      id: '8',
      userId: 'user_aisha',
      userName: 'Aisha B.',
      content: 'Love the flexible payment options! I was able to get a generator for my shop without breaking the bank. Business is running smoothly now. Thank you ExtraMile! 🙏',
      timestamp: new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
      likes: ['user_ahmed', 'user_blessing', 'user_emeka'],
      replies: []
    }
  ];

  localStorage.setItem(POSTS_KEY, JSON.stringify(seedPosts));
};