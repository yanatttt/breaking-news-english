import LevelModal from "@/components/home/LevelModal/LevelModal"
import ContinueBanner from "@/components/home/ContinueBanner/ContinueBanner"
import FilterBar from "@/components/home/FilterBar/FilterBar"
import HeroLesson from "@/components/home/HeroLesson/HeroLesson"
import LessonGrid from "@/components/home/LessonGrid/LessonGrid"
import FreeSites from "@/components/home/FreeSites/FreeSites"
import OnlineActivities from "@/components/home/OnlineActivities/OnlineActivities"
import NewsletterCTA from "@/components/home/NewsletterCTA/NewsletterCTA"

export default function Home() {
  return (
    <main>
      <LevelModal />
      <ContinueBanner />
      <FilterBar />
      <HeroLesson />
      <LessonGrid />
      <FreeSites />
      <OnlineActivities />
      <NewsletterCTA />
    </main>
  )
}
