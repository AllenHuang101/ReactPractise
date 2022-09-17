import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

// 高階組件: 函數
function withRouter(WrapperComponent) {
  return function (props) {
    // 導航
    const navigate = useNavigate();
    // 動態路由的餐設
    const params = useParams();

    // 查詢參數
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    const router = { navigate, params, location, searchParams, query };
    return <WrapperComponent {...props} router={router} />;
  };
}

export default withRouter;
