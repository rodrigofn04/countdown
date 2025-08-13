import { useState } from 'react'

const useCountdown = (date) => {
    const [day, setDays] = useState()
    const [hour, setHours] = useState()
    const [minute, setMinutes] = useState()
    const [second, setSeconds] = useState()

    const countdown = () =>{
        const countDate = new Date(date).getTime()
        const now = new Date().getTime()
        const gap = countDate - now

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const dayNumber = Math.floor(gap / day)
        const hourNumber = Math.floor((gap % day) / hour)
        const minuteNumber = Math.floor((gap % hour) / minute)
        const secondNumber = Math.floor((gap % minute) / second)

        setDays(dayNumber)
        setHours(hourNumber)
        setMinutes(minuteNumber)
        setSeconds(secondNumber)
    }

    setInterval(countdown, 1000)

    return [day, hour, minute, second]
}

export default useCountdown;