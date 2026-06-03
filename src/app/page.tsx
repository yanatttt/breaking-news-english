import LevelModal from "@/components/home/LevelModal/LevelModal"
import ContinueBanner from "@/components/home/ContinueBanner/ContinueBanner"
import HeroLesson from "@/components/home/HeroLesson/HeroLesson"
import FilterBar from "@/components/home/FilterBar/FilterBar"
import LessonGrid from "@/components/home/LessonGrid/LessonGrid"
import FreeSites from "@/components/home/FreeSites/FreeSites"
import OnlineActivities from "@/components/home/OnlineActivities/OnlineActivities"
import NewsletterCTA from "@/components/home/NewsletterCTA/NewsletterCTA"

export default function Home() {
  return (
    <>
      <LevelModal />
      <ContinueBanner />
      <HeroLesson />
      <FilterBar />
      <LessonGrid />
      <FreeSites />
      <OnlineActivities />
      <NewsletterCTA />
    </>
  )
}
