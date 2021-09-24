/** @jsxImportSource @emotion/react */
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg';
import Footer from 'components/containers/footer.container';
import TopBar from 'components/containers/top-bar.container';
import Quote, { QuoteResponse } from 'components/quote/quote.component';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { randomInRange } from 'utils/math';

const TOTAL_QUOTES = 72672;

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
  const [quotes, setQuotes] = useState<QuoteResponse[]>([]);
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [isList, setIsList] = useState(false);

  const fetchQuotes = async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      const data: QuoteResponse[] = json.data;
      setQuotes(data);
      setAuthor(data[0]?.quoteAuthor);
      setGenre(data[0]?.quoteGenre);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRandomQuote = async () => {
    const randomPage = randomInRange(1, TOTAL_QUOTES);
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?limit=1&page=${randomPage}`;

    await fetchQuotes(url);
    setIsList(false);
  };

  const fetchAuthorQuotes = async () => {
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`;

    await fetchQuotes(url);
    setIsList(true);
  };

  useEffect(() => {
    fetchRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={tw`flex flex-col max-w-[1440px] min-h-screen mx-auto px-24`}>
      <TopBar onRenew={fetchRandomQuote} />
      <div css={tw`flex-1 self-center flex flex-col justify-center gap-y-20 w-96 h-full mb-12`}>
        <div css={tw`flex flex-col gap-y-24`}>
          {isList && <h1 css={tw`text-3xl font-bold`}>{author}</h1>}
          {quotes?.map(({ _id, quoteText }) => (
            <Quote key={_id} quoteText={quoteText} />
          ))}
        </div>
        {!isList && (
          <button
            className="group"
            css={tw`flex justify-between items-center px-6 py-7 -mx-6 hover:bg-gray-600 duration-200`}
            onClick={fetchAuthorQuotes}
          >
            <div css={tw`flex flex-col items-start gap-y-2`}>
              <span css={tw`text-xl font-bold text-gray-500 group-hover:text-gray-50 duration-200`}>
                {author}
              </span>
              <span css={tw`text-sm text-gray-400`}>{genre}</span>
            </div>
            <ArrowRightIcon css={tw`text-white group-hover:text-gray-50`} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Application;
