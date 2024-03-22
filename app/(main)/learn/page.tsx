import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourseId) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "Spanish",
            imgSrc: "/es.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;