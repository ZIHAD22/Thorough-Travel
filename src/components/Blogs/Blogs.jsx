import React from "react";
import BlogItem from "../BlogItem/BlogItem";
const blogsData = [
  {
    id: 1,
    title: "Difference between authorization and authentication",
    description: `উভয় কেই ব্যবহার করা হয় ডেটা সিস্টেমে সুরক্ষার জন্য। Authentication প্রক্রিয়ায়, সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা হয়। এই প্রক্রিয়ায় ব্যবহারকারী বা ব্যক্তিদের যাচাই করা হয়। এটি authorization প্রক্রিয়ার আগে করা হয়। এটি সাধারণত ব্যবহারকারীর লগইন details প্রয়োজন। Authentication নির্ধারণ করে যে ব্যক্তিটি ব্যবহারকারী কিনা`,
    publisher: "MD.ZIHAD",
    img: "https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2020-10/Authentication_vs_Authorization.png?itok=uBFRCfww",
  },
  {
    id: 2,
    title:
      "Why are you using firebase? What other options do you have to implement authentication?",
    description: `Firebase authentication ব্যবহার করার অনেক গুলো কারন এর ভিতরে একটি কারণ হল it's provides us backend services। হজে ব্যবহারযোগ্য SDK, এবং ব্যবহারকারীদের authentication জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় authorization প্রদানকারী company এর সাহায্যে এবং আরও অনেক কিছু ব্যবহার করে authentication এ সমর্থন করে`,
    publisher: "MD.ZIHAD",
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/885818/retina_1708x683_staging.toptal.net_firebase_role-based-firebase-authentication-826a632143cf2f34949096059f93cff1.png",
  },
  {
    id: 3,
    title:
      "What other services does firebase provide other than authentication",
    description: `Firebase provide many other thing than authentication. এর টা আমাদের Emulator Suite , Realtime Database, Cloud Firestore , Cloud Storage for Firebase , Machine Learning, Firebase Hosting, Cloud Functions , Firebase Security Rules অ্যান্ড  Firebase Extensions ব্যবহার করতে দেয়।`,
    publisher: "MD.ZIHAD",
    img: "https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg",
  },
];
const Blogs = () => {
  return (
    <div className="container">
      {blogsData.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
