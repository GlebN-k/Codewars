const humanReadable = seconds => {
    switch (true) {
        case seconds < 60:
            let sec = seconds.toString().padStart(2, '0')
            return `00:00:${sec}`
        case seconds < 3600: {
            let minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
            let sec = (seconds - minutes * 60).toString().padStart(2, '0')
            return `00:${minutes}:${sec}`
        }
        case seconds <= 359999: {
            let hours = String(Math.floor(seconds / 3600)).padStart(2, '0')
            let minutes = String(Math.floor((seconds - hours * 3600) / 60)).padStart(2, '0')
            let sec = String(seconds - minutes * 60 - hours * 3600).padStart(2, '0')
            return `${hours}:${minutes}:${sec}`
        }
    }
}




