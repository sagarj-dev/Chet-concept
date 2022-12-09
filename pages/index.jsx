import Screen from "../components/screen";
import useAppContext from "../components/utility/useAppContext";

export default function Home() {
  const { getTheme } = useAppContext();
  return (
    <div data-theme={getTheme()}>
      <Screen />
    </div>
  );
}
