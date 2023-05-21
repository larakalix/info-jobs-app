import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import {
    HiOutlineLocationMarker,
    HiOutlineClock,
    HiOutlineCollection,
    HiOutlineCalendar,
} from "react-icons/hi";

type Props = {
    city: string;
    published: Date;
    category: string;
    workDay: string;
};

export const OfferPropertiesList = ({
    city,
    published,
    category,
    workDay,
}: Props) => {
    return (
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:font-light [&>li]:text-sm [&>li>svg]:text-blue-500">
            <li>
                <HiOutlineLocationMarker /> {city}
            </li>
            <li>
                <HiOutlineClock />
                Publicada hace{" "}
                {formatDistanceToNow(new Date(published), { locale: es })}
            </li>
            <li>
                <HiOutlineCollection />
                {category}
            </li>
            <li>
                <HiOutlineCalendar />
                Jornada {workDay}
            </li>
        </ul>
    );
};
