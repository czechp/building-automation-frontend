import dayjs from "dayjs";

const FULL_DATE_TIME_FORMAT = "HH:mm:ss DD.MM.YYYY";

const dateConverter = {
    toFullDateTime: function (iso) {
        return dayjs(iso).format(FULL_DATE_TIME_FORMAT);
    }
};

export default dateConverter;