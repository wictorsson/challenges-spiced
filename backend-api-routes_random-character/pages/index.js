import useSWR from "swr";
import StyledComponent from "styled-components";

const MainFlex = StyledComponent.div`
display:flex;
justify-content: center;
margin: 30px;

`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <MainFlex>
      <div>
        {data.character.firstName} {data.character.lastname}
      </div>
    </MainFlex>
  );
}
