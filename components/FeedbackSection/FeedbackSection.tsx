'use client'

import { Feedback } from "@/types/feedback"
import Companies from "./Companies"
import { useRef, useState } from "react"
import FeedbackCard from "./FeedbackCard"

export default function FeedbackSection() {
  const feedbacks: Feedback[] = [
    {
      id: 1,
      name: 'Larry Lawson',
      title: 'Agent at Squire',
      content: 'Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dash woods see frankness objection abilities hire alteration it favorable appearance up.',
      rating: 5,
      mediaType: 'video',
      mediaSrc: '/video/feedback1.mp4'
    },
    {
      id: 2,
      name: 'Jenny Wilson',
      title: 'Architect at PlantLab',
      content: 'Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.',
      rating: 5,
      mediaType: 'image',
      mediaSrc: '/images/feedback2.jpg'
    },
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="bg-bg-sheet py-16 md:pt-32 md:pb-16 font-helvetica">
      <div className="mb-16">
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-8 md:px-16 lg:px-24"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3">
            {feedbacks.map((feedback, index) => (
              <FeedbackCard 
                key={feedback.id} 
                feedback={feedback} 
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16 lg:px-24 mb-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg md:text-xl font-light border-b-[1px] border-black/10 pb-16">
            Empowering Growth Through Strong Partnerships
          </p>
        </div>
      </div>

      <Companies />
    </section>
  )
}