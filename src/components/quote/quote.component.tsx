export type QuoteResponse = {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
};

export interface QuoteProps {
  quoteText: string;
}

const Quote: React.FunctionComponent<QuoteProps> = (props) => {
  const { quoteText } = props;

  return (
    <blockquote className="quote">
      <q>{quoteText}</q>
    </blockquote>
  );
};

Quote.defaultProps = {};

export default Quote;
