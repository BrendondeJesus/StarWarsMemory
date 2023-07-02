import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import ImagemFundo from '../../svgs/fundoStarWars.svg';
import {items} from '../../data/items';

type Props = {
    item:GridItemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} showBackground={item.permanentShown || item.shown} >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={ImagemFundo} alt="" opacity={0.2}/>
            }

            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon}/>
            }
        </C.Container>
    );
}