import { AppStore } from "app/providers/store";
import { useStore } from "react-redux";

const useAppStore = useStore as () => AppStore;

export default useAppStore