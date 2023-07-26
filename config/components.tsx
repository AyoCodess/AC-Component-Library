import {
  ArticleSectionSlider,
  ArticleSectionSliderMobile,
} from "@/components/article-section-slider"
import { MiscDivider, MiscDividerMobile } from "@/components/misc-divider"
import {
  SwiperBlogSlider,
  SwiperBlogSliderMobile,
} from "@/components/swiper-blog-slider"
import {
  SwiperHeroSlider,
  SwiperHeroSliderMobile,
} from "@/components/swiper-hero-slider"

export const components = [
  {
    Title: "Animated Div Split",
    componentDesktop: <MiscDivider />,
    componentMobile: <MiscDividerMobile />,
    resizeWidth: { Desktop: 600, Mobile: 360 },
    resizeHeight: { Desktop: 600, Mobile: 360 },
  },
  {
    Title: "Article Section Slider",
    componentDesktop: <ArticleSectionSlider />,
    componentMobile: <ArticleSectionSliderMobile />,
    resizeWidth: { Desktop: 600, Mobile: 360 },
    resizeHeight: { Desktop: 600, Mobile: 360 },
  },
  {
    Title: "Swiper Blog Slider",
    componentDesktop: <SwiperBlogSlider />,
    componentMobile: <SwiperBlogSliderMobile />,
    resizeWidth: { Desktop: 600, Mobile: 360 },
    resizeHeight: { Desktop: 600, Mobile: 360 },
  },
  {
    Title: "Swiper Hero Slider",
    componentDesktop: <SwiperHeroSlider />,
    componentMobile: <SwiperHeroSliderMobile />,
    resizeWidth: { Desktop: 600, Mobile: 360 },
    resizeHeight: { Desktop: 600, Mobile: 360 },
  },
]
