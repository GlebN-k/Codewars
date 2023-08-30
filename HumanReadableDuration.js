    const formatDuration = seconds => {
        switch (true) {
            case seconds === 0 :
                return 'now'

            case seconds < 60 :

                return `${seconds} second${seconds > 1 ? 's' : ''}`
            case seconds < 3600: {
                let minutes = Math.floor(seconds / 60)
                let sec = (seconds - minutes * 60)
                return `${minutes} minute${minutes > 1 ? 's' : ''}${sec ? ` and ${sec} second${sec > 1 ? 's' : ''}` : ''}`
            }
            case seconds <= 86400: {
                let hours = Math.floor(seconds / 3600)
                let minutes = Math.floor((seconds - hours * 3600) / 60)
                let sec = seconds - minutes * 60 - hours * 3600
                return `${hours} hour${hours > 1 ? 's' : ''}${minutes ? `, ${minutes} minute${minutes > 1 ? 's' : ''}` : ''}${sec ? ` and ${sec} second${sec > 1 ? 's' : ''}` : ''}`
            }
            case seconds <= 31536000: {
                let days = Math.floor(seconds / 86400)
                let hours = Math.floor((seconds - days * 86400) / 3600)
                let minutes = Math.floor((seconds - days * 86400 - hours * 3600) / 60)
                let sec = seconds - days * 86400 - minutes * 60 - hours * 3600
                return `${days} day${days > 1 ? 's' : ''}${hours ? `, ${hours} hour${hours > 1 ? 's' : ''}` : ''}${minutes && sec > 0 ? `, ${minutes} minute${minutes > 1 ? 's' : ''}` : (minutes && sec === 0) ? ` and ${minutes} minute${minutes > 1 ? 's' : ''}` : ''}${sec ? ` and ${sec} second${sec > 1 ? 's' : ''}` : ''}`
            }
            case seconds > 31536000: {
                let years = Math.floor(seconds / 31536000)
                let days = Math.floor((seconds - years * 31536000) / 86400)
                let hours = Math.floor((seconds - years * 31536000 - days * 86400) / 3600)
                let minutes = Math.floor((seconds - years * 31536000 - days * 86400 - hours * 3600) / 60)
                let sec = seconds - years * 31536000 - days * 86400 - minutes * 60 - hours * 3600
                console.log('sec', sec)
                return `${years} year${years > 1 ? 's' : ''}${days ? `, ${days} day${days > 1 ? 's' : ''}` : ''}${hours ? `, ${hours} hour${hours > 1 ? 's' : ''}` : ''}${minutes && sec > 0 ? `, ${minutes} minute${minutes > 1 ? 's' : ''}` : ` and ${minutes} minute${minutes > 1 ? 's' : ''}`}${sec ? ` and ${sec} second${sec > 1 ? 's' : ''}` : ''}`
            }

        }
    }


    const formatUnit = (value, unit) => {
        return `${value} ${unit}${value > 1 ? 's' : ''}`;
    };
    //
    // const formatDuration = seconds => {
    //     const timeUnits = [
    //         { unit: 'year', seconds: 31536000 },
    //         { unit: 'day', seconds: 86400 },
    //         { unit: 'hour', seconds: 3600 },
    //         { unit: 'minute', seconds: 60 },
    //         { unit: 'second', seconds: 1 }
    //     ];
    //
    //     if (seconds === 0) {
    //         return 'now';
    //     }
    //
    //     for (const unit of timeUnits) {
    //         if (seconds >= unit.seconds) {
    //             const value = Math.floor(seconds / unit.seconds);
    //             const formatted = formatUnit(value, unit.unit);
    //             seconds -= value * unit.seconds;
    //
    //             if (seconds > 0) {
    //                 const remaining = formatUnit(seconds, 'second');
    //                 return `${formatted} and ${remaining}`;
    //             } else {
    //                 return formatted;
    //             }
    //         }
    //     }
    // };
