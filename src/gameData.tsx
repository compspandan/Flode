import { Block } from "./components/FlowChart/config"

    export const problems = [
            {
                "level": 1,
                "problemStatement": "Find the average of all elements in a list."
            },
            {
                "level": 2,
                "problemStatement": "Add two numbers."
            },
            {
                "level": 3,
                "problemStatement": "Check if number is a multiple of 4."
            },
            {
                "level": 4,
                "problemStatement": "Find the average of all elements in a list."
            },
            {
                "level": 5,
                "problemStatement": "Add two numbers."
            },
            {
                "level": 6,
                "problemStatement": "Check if number is a multiple of 4."
            }
        ]
    
    interface footerIcons_interface {
        blockType: keyof Block;
    }
    
    export const footerIcons:footerIcons_interface[] = [
            {
                "blockType": "start"
            },
            {
                "blockType": "exec"
            },
            {
                "blockType": "io"
            },
            {
                "blockType": "cond"
            },
            {
                "blockType": "end"
            },
            // {
            //     "blockType": "cond"
            // },
            // {
            //     "blockType": "io"
            // },
            // {
            //     "blockType": "loop"
            // },
            // {
            //     "blockType": "exec"
            // },
            // {
            //     "blockType": "end"
            // }
        ]
    
    