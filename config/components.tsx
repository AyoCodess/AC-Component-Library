import { ArticleSectionSlider } from "@/components/article-section-slider"
import { MiscDivider } from "@/components/misc-divider"
import { SwiperBlogSlider } from "@/components/swiper-blog-slider"
import { SwiperHeroSlider } from "@/components/swiper-hero-slider"

export const components = [
  {
    Title: "Animated Div Split",
    component: <MiscDivider />,
    resizeWidth: 360,
  },
  {
    Title: "Article Section Slider",
    component: <ArticleSectionSlider />,
    resizeWidth: 600,
  },
  {
    Title: "Swiper Blog Slider",
    component: <SwiperBlogSlider />,
    resizeWidth: 600,
  },
  {
    Title: "Swiper Hero Slider",
    component: <SwiperHeroSlider />,
    resizeWidth: 600,
  },
]
