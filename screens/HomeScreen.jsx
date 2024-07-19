import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import Heading from '../components/Heading';
import WoofPost from '../components/WoofPost';
import WoofCard from '../components/WoofCard';

const data = {
    woofs: [
        {
            id: "woof-1",
            name: "Rex",
            avatar: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80",
            caretaker: "Victor Grabarczyk",
            source: "https://unsplash.com/photos/x5oPmHmY3kQ",
        },
        {
            id: "woof-2",
            name: "Bola",
            avatar: "https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80",
            caretaker: "Tatiana Rodriguez",
            source: "https://unsplash.com/photos/J40C1k6Fut0",
        },
        {
            id: "woof-3",
            name: "Feliz",
            avatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80",
            caretaker: "Marliese Streefland",
            source: "https://unsplash.com/photos/2l0CWTpcChI",
        },
        {
            id: "woof-4",
            name: "Fofo",
            avatar: "https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80",
            caretaker: "Nick Fewings",
            source: "https://unsplash.com/photos/rMKXLAIa2OY",
        },
        {
            id: "woof-5",
            name: "Espírito",
            avatar: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80",
            caretaker: "Jamie Street",
            source: "https://unsplash.com/photos/uNNCs5kL70Q",
        },
    ],
    posts: [
        {
            id: "post-1",
            image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80",
            title: "Woofs Felizes",
            description: "Como manter seu woof saudável e feliz. Perguntamos a alguns dos melhores especialistas.",
            caretaker: "Jamie Street",
            source: "https://unsplash.com/photos/UtrE5DcgEyg",
        },
        {
            id: "post-2",
            image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80",
            title: "Woofs & Amigos",
            description: "Melhores amigos são importantes para humanos, mas também para cães.",
            caretaker: "Krista Mangulsone",
            source: "https://unsplash.com/photos/9gz3wfHr65U",
        },
        {
            id: "post-3",
            image: "https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80",
            title: "Bons Woofs",
            description: "Um bom woof é um woof que traz alegria. Aqui estão algumas dicas para fazer seu woof se comportar.",
            caretaker: "Olia Nayda",
            source: "https://unsplash.com/photos/f6v_Q0WXEK8",
        },
        {
            id: "post-4",
            image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80",
            title: "Woofs Selvagens",
            description: "Em algumas partes do mundo, woofs selvagens são muito comuns. Aprenda como interagir de uma maneira agradável.",
            caretaker: "Anoir Chafik",
            source: "https://unsplash.com/photos/2_3c4dIFYFU",
        },
        {
            id: "post-5",
            image: "https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80",
            title: "Woofs Sonolentos",
            description: "Dormir é tão importante para woofs quanto para humanos. Quais são as principais coisas que seu woof sonha?",
            caretaker: "Max Singh",
            source: "https://unsplash.com/photos/2637Pic9xMw",
        },
        {
            id: "post-6",
            image: "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80",
            title: "Woofs Exploradores",
            description: "Ficar sentado em um lugar é entediante para a maioria dos woofs. Como os woofs exploram o mundo?",
            caretaker: "Jamie Street",
            source: "https://unsplash.com/photos/wcO2PWLuQ3U",
        },
    ],
};


const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Heading>Trending Woofs</Heading>
            <FlatList
                data={data.woofs}
                renderItem={({ item }) => <WoofCard name={item.name} avatarUrl={item.avatar} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.woofList}
            />
            <Heading>Novos Posts</Heading>
            {data.posts.map(post => (
                <WoofPost
                    key={post.id}
                    image={post.image}
                    title={post.title.toUpperCase()}
                    description={post.description}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
    },
    woofList: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default HomeScreen;