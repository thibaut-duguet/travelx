import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatOpenAI({ 
    model: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY
});

export const fetchOpenAIResponse = async (input: string) => {
    console.log("input", input)
    const messages = [
        new SystemMessage("Can you give the distance between the two following cities"),
        new HumanMessage(input),
    ];
    const parser = new StringOutputParser();
    const chain = model.pipe(parser);
    return await chain.invoke(messages);
};
