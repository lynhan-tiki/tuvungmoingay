import React from "react";
import styled from "styled-components";

import generate from "./translate";
import useTimmer from "../../hooks/useTimmer";

const colors = {
    verb: "#2980b9",
    adj: "#e67e22",
    noun: "#16a085"
};
const Description = styled.p`
    font-weight: bold;
    border-top: 1px solid #ccc;
    span {
        padding: 4px 0;
        display: block;
        :nth-child(2) {
            color: #888;
        }
    }
    margin: 0;
`;
const Type = styled.span`
    background: ${p => colors[p.type]};
    padding: 2px 4px;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
`;
const Speak = styled.span`
    display: flex;
    align-items: center;
    background: #bdc3c7;
    padding: 2px 4px;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    font-size: 14px;
`;
const Tag = styled.div`
    display: flex;
    padding: 4px 0;
    ${Type} {
        margin: 0 8px;
    }
`;
const Word = styled.p`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    h2 {
        font-size: 20px;
        margin: 0;
        padding: 0;
        &:before {
            content: "🔊";
            padding-right: 4px;
        }
        &:after {
            content: ":";
            padding-right: 4px;
        }
    }
`;
const Card = styled.div`
    box-shadow: rgb(228, 228, 228) 0px 0px 3px 1px;
    padding: 16px;
`;
const Container = styled.div`
    max-width: 640px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    ${Card} {
        margin: 16px;
    }
`;

const maps = {
    adj: "Tính từ",
    noun: "Danh từ",
    verb: "Động từ"
};

const Item = item => {
    return (
        <Card>
            <Word>
                <h2>{item.word}</h2> {item.mean}
            </Word>
            <Tag>
                <Speak>/{item.word}/</Speak>
                <Type type={item.type}>{maps[item.type]}</Type>
            </Tag>
            <Description>
                <span>{item.example.en}</span>
                <span>{item.example.vi}</span>
            </Description>
        </Card>
    );
};
const Home = props => {
    const [idx, setIdx] = React.useState(1);
    const { count, reset } = useTimmer(10, () => {
        const next = idx + 1;
        setIdx(next);
        if (next < 5) {
            reset(10);
        }
    });
    return (
        <Container>
            {generate(5)
                .slice(0, idx)
                .map(item => (
                    <Item {...item} setIdx={setIdx} />
                ))}
            {count > 0 && (
                <Card style={{ textAlign: "center" }}>
                    <h1 style={{ color: "#666" }}>{count}s</h1>
                </Card>
            )}
        </Container>
    );
};

export default Home;
