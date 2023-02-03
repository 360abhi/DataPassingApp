import { Injectable } from "@angular/core"

@Injectable ({
    providedIn:'root'
})

export class CardService {

    getDetails() {
        return [
            {
                'imageurl' : "../../assets/mit.jpeg",
                'heading' : 'Heading One',
                'about' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia! Illum aperiam nulla impedit explicabo in cum minima, qui a.',
            },
            {
                'imageurl' : "../../assets/st.jpeg" ,
                'heading' : 'Heading Two',
                'about' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia! Illum aperiam nulla impedit explicabo in cum minima, qui a.',
            },
            {
                'imageurl' : "../../assets/uzui.webp",
                'heading' : 'Heading Three',
                'about' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia! Illum aperiam nulla impedit explicabo in cum minima, qui a.',
            },
            {
                'imageurl' : "../../assets/rengoku.webp",
                'heading' : 'Heading Four',
                'about' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia! Illum aperiam nulla impedit explicabo in cum minima, qui a.',
            },
        ]
    }

}