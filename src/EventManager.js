let handle = []

export const EventManager = {
    addEventListener: (event, func) => {
        if (!handle[event]) {
            handle[event] = []
        }

        handle[event].push(func)
    },
    removeEventListener: (event, func) => {
        if(handle[event]) {
            let length = handle[event].length
            let survivalHandle = []
            for (let i = 0; i < length; i++) {
                if(handle[event][i] !== func) {
                    survivalHandle.push(handle[event][i])
                }
            }
            
            handle[event] = survivalHandle.slice()
        }
    },
    dispatch: (event, eventData) => {
        if(handle[event]) {
            handle[event].forEach( (e, i) => {
                e(eventData)
            })
        }
    }
}