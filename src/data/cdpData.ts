interface CDPResponse {
  pattern: RegExp;
  response: string;
}

export const cdpResponses: CDPResponse[] = [
  {
    pattern: /set up.*(source|connection).*segment/i,
    response: `To set up a new source in Segment:
1. Log in to your Segment workspace
2. Click on "Add Source" in the Sources section
3. Choose your source type from the catalog
4. Follow the source-specific setup instructions
5. Configure your source settings
6. Enable the source when ready`
  },
  {
    pattern: /create.*user profile.*mparticle/i,
    response: `To create a user profile in mParticle:
1. Access your mParticle dashboard
2. Navigate to the User Activity section
3. Click "Create New Profile"
4. Enter user identifiers (email, customer ID, etc.)
5. Add user attributes and custom data
6. Save the profile`
  },
  {
    pattern: /build.*audience.*segment.*lytics/i,
    response: `To build an audience segment in Lytics:
1. Go to Audiences in your Lytics dashboard
2. Click "Create New Audience"
3. Define your audience criteria
4. Set behavioral rules and filters
5. Preview your audience
6. Save and activate the segment`
  },
  {
    pattern: /integrate.*data.*zeotap/i,
    response: `To integrate your data with Zeotap:
1. Access your Zeotap account
2. Go to Data Integration section
3. Choose integration method (API, SDK, or batch upload)
4. Configure data mapping
5. Set up authentication
6. Test and verify the integration`
  },
  {
    pattern: /compare|difference|versus|vs/i,
    response: `Key differences between CDPs:
- Segment: Focus on data collection and routing, extensive integrations
- mParticle: Strong mobile capabilities, real-time data processing
- Lytics: Advanced ML-powered audience building, predictive analytics
- Zeotap: Identity resolution, deterministic matching capabilities`
  },
  {
    pattern: /.*(movie|film|cinema).*/i,
    response: "I'm a CDP support chatbot. I can only help with questions about Customer Data Platforms like Segment, mParticle, Lytics, and Zeotap."
  }
];

export const defaultResponse = "I'm not sure about that. Could you please rephrase your question about Segment, mParticle, Lytics, or Zeotap?";

export function findResponse(question: string): string {
  const matchingResponse = cdpResponses.find(item => item.pattern.test(question));
  return matchingResponse ? matchingResponse.response : defaultResponse;
}