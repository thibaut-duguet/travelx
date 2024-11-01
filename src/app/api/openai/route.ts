import { NextResponse } from 'next/server';
import { fetchOpenAIResponse } from '@/services/openAIService';

export async function POST(req: Request) {
    const { input } = await req.json();

    try {
        const response = await fetchOpenAIResponse(input);
        return NextResponse.json(response);
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        return NextResponse.json({ error: 'Error calling OpenAI' }, { status: 500 });
    }
}