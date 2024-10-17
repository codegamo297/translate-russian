const data = [
    {
        questionGroup: [
            "Автономная система управления ракетой – все устройства, формирующие основной управляющий сигнал, находятся на борту летательного аппарата и в процессе полета не получают никакой информации от цели или с командного пункта",
            "Аэродинамическая сила R действует на ракету лишь при полете в плотных слоях атмосферы. Она зависит от размеров и формы ракеты, скорости ивысоты её полёта, а также от величины углов атаки",
            "Гиперзвуковым оружиемявляется ракета, в которых боевая часть двигается на гиперзвуковых скоростях в атмосфере. То есть в промежутке 5000 – 25000 километров в час",
            "Х-47м2 'Кинжал' – это российский гиперзвуковой авиационный ракетный комплекс, который относится к новейшим. Это ракета с ядерным или обычным боезарядом",
            "Гиперзвуковые ракеты (около 10 М) комплекса способны поражать как стационарные объекты, так и надводные корабли: авианосцы, крейсеры, эсминцы и фрегаты",
            "Новая ракета «Кинжал» является не крылатой, а «аэробаллистической», — траектория ракеты поддерживается за счёт высокой скорости",
            "МиГ-31К способен нести 1 ракету и поражать цели на расстоянии до 2000 километров. Также носителями ракет 'Кинжал' могут быть стратегические бомбардировщики Ту-22М3, способные нести 4 ракеты",
            "Ракета'Кинжал', после сброса в заданной точке, далее летела с гиперзвуковой скоростью, превышая скорость звука в 10 раз и маневрируя на всей траектории полёта",
            "Сразу после старта 'Кинжал' залетает в стратосферу и летит на большой скорости вниз. 'Времени для того, чтобы эффективно ее выявить и пробовать сбить, очень мало', – сообщал Игнат",
            "Ракета достигает скорости до 12000 километров в час, перехватить ее на маршевом участке невозможно даже специализированными противоракетными комплексами",
        ],
        translateGroup: [
            "Hệ thống điều khiển tên lửa ô - tô - nôm - tất cả các thiết bị tạo tín hiệu điều khiển khiển chính nằm trên khoang của thiết bị bay và trong quá trình bay không thu nhận bất kỳ thông tin gì từ mục tiêu hoặc từ đài phát lệnh",
            "Lực khí động R chỉ tác động lên tên lửa khi nó bay trong môi trường không khí đặc. Lực này phụ thuộc vào kích thước, dạng tên lửa, vận tốc và độ cao bay cũng như góc tấn công",
            "Vũ khí siêu vượt âm tên lửa có phần chiến đấu chuyển động với tốc độ siêu âm trong khí quyển. Tức nằm trong khoảng 5000-25000 km/h",
            "Х-47м2 'Кинжал' – là tổ hợp tên lửa hàng không siêu vượt âm mới của Nga. Tên lửa có trang bị đầu đạn thường hoặc hạt nhân",
            "Tổ hợp tên lửa siêu vượt âm (khoảng 10Max) có khả năng tiêu diệt các đối tượng cố định cũng như các tàu mặt nước: tàu sân bay, tàu tuần tiễu, tuần dương hạm và tàu khu trục",
            "Tên lửa mới “Кинжал” không phải là tên lửa có cánh mà là tên lửa khí đạn đạo–quỹ đạo của tên lửa được đảm bảo bằng tốc độ cao",
            "Mig-31K có khả năng mang 1 tên lửa và tiêu diệt các mục tiêu với khoảng cách lên đến 2000km. Tương tự phương tiện mang tên lửa Kinzhal khác có thể là máy bay ném bom chiến lược Tu-22M3, vớ ikhả năng mang 4 tên lửa",
            "Tên lửa Кинжал, sau khi thả tại điểm đã xác định trước, tiếp tục bay với vận tốc siêu vượt âm gấp 10 lần vận tốc âm thanh và cơ động trên toàn bộ quỹ đạo bay",
            "Ngay sau khi phóng, tên lửa Kinzhal bay lên tầng bình lưu và bay xuống với tốc độ lớn. “Thời gian để phát hiện ra và bắn hạ nó rất ít” –Ignat cho biết",
            "Tên lửa đạt tốc độ đến 12000 km/h, không thể đánh chặn nó trong giai đoạn hành trình thậm chí bằng các tổ hợp đánh chặn tên lửa chuyên dụng",
        ],
    },

    {
        questionGroup: [
            "Скорость ракеты после начального участка траектории: 2100 м/c. Максимальные перегрузки в процессе полёта — 20-30G (ракета маневрирует в полёте как по высоте, так и по направлению полёта). Максимальная высота траектории — более 1000 км",
            "Межконтинентальные баллистические крылатые ракеты могут подразделяться в зависимости от их размера, скорости (дозвуковая или сверхзвуковая), дальности полёта и места запуска: с земли, воздуха, поверхности корабля или подводной лодки",
            "Определение текущих координат цели и ракеты (например, дальности, азимута и угла места) осуществляется радиолокационной станцией сопровождения. В некоторых комплексах эта задача решается двумя радиолокаторами, один из которых сопровождает цель, а другой – ракету",
            "Самонаведение - управление полетом ракеты осуществляется командами, вырабатываемыми на борту ракеты. Пассивная система - цель ничем не облучается, а головка самонаведения (ГСН) использует энергию, излучаемую целью – инфракрасную или фотоконтрастную",
            "Для визирования ракеты, как правило, применяются радиолокационные линии с активным ответом, т.е. на протяжении всего времени полета к цели ракета на каждый запросный импульс с земли отвечает своим ответным",
            "Автономным называется такое наведение ракеты, которое осуществляется лишь с помощью ее бортовых устройств, без какой-либо связи с наземной аппаратурой и целью. Вся система управления полетом находится на ракете",
            "При ударе, на терминальном участке, скоростьракеты составляет до 3,4 Маха, а угол падения составляет 80–90 градусов, что также требует специализированных противоракетных комплексов для ее эффективного перехватывания",
            "Координатор цели устанавливается на борту ракеты. Он осуществляет слежение за целью и определение ее текущих координат в подвижной системе координат, связанной с ракетой",
            "Система наведения ракетного комплекса образует контур управления управляемой ракетой (УР). Элементы контура управления могут располагаться на земле и на ракете или только на борту ракеты",
            "Координатор цели устанавливается на борту ракеты. Бортовой координатор в общем случае включает антенну приёма сигналов цели, приёмник, устройство определения координат цели, шифратор, передатчик сигналов , содержащих информацию о координатах цели, и передающую антенну",
        ],

        translateGroup: [
            "Vận tốc của tên lửa sau giai đoạn đầu của quỹ đạo đạt 2100 m/s. Quá tải cực đại trong khi bay 20-30G (tên lửa cơ động trong khi bay theo độ cao cũng như theo hướng bay). Trần bay của quỹ đạo – trên 1000 km",
            "Các tên lửa có cánh đạn đạo liên lục địa có thể được phân chia tùy thuộc vào kích thước, vận tốc ( dưới âm hoặc vượt âm), cự ly bay và vị trí phóng của nó: từ mặt đất, trên không, bề mặt tàu hoặc tàu ngầm",
            "Việc xác định các tọa độ tức thời của mục tiêu và tên lửa (ví dụ, cự ly, phương vị, góc tà) được thực hiện bởi đài bám sát ra đa. Ở một vài tổ hợp tổ hợp bài tóan đó được giải quyết bởi  hai đài ra đa, một đài bám sát mục tiêu , còn đài khác- bám sát tên lửa",
            "Tự dẫn – Việc điều khiển bay của tên lửa được thực hiện bởi các lệnh tạo ra trên khoang tên lửa. Hệ thống tự dẫn thụ động – mục tiêu không phát xạ, còn đầu tự dẫn sử dụng năng lượng bức xạ từ mục tiêu – hồng ngoại hoặc tương phản quang ảnh",
            "Để quan sát tên lửa thường sử dụng đường truyền vô tuyến với tín hiệu trả lời tích cực, tức là trong toàn bộ khoảng thời gian bay đến mục tiêu, tên lửa trả lời từng xung hỏi từ mặt đất bằng tín hiệu trả lời của mình",
            "Dẫn ô tô nôm là việc dẫn tên lửa được thực hiện chỉ nhờ các thiết bị trên khoang tên lửa không sử dụng các kênh liên lạc với mặt đất, mục tiêu. Tất cả hệ thống điều khiển nằm trên tên lửa",
            "Khi tấn công, tại giai đoạn cuối, tốc độ tên lửa đạt 3.4 M, còn góc rơi khoảng 80-90 độ, điều này đòi hỏi phải có các tổ hợp đánh chặn tên lửa chuyên dụng để đánh chặn nó một cách hiệu quả",
            "Thiết bị tọa độ mục tiêu được đặt trên khoang tên lửa. Nó thực hiện bám theo mục tiêu và xác định các tọa độ tức thời của nó trong hệ tọa độ di động gắn với tên lửa",
            "Hệ thống dẫn của tổ hợp tên lửa cấu thành vòng điều khiển tên lửa có điều khiển. Các phần tử của vòng điều khiển có thể được bố trí trên mặt đất và trên tên lửa hoặc chỉ trên khoang tên lửa",
            "Thiết bị tọa độ mục tiêu được đặt trên khoang tên lửa. Thiết bị tọa độ trên khoang trong  trường hợp tổng quát bao gồm an ten thu tín hiệu mục tiêu, máy thu, thiết bị xác định tọa độ mục tiêu, thiết bị mã hóa, máy phát tín hiệu, chứa thông tin về các tọa độ mục tiêu an ten phát",
        ],
    },
];

const dataQuestion1 = [
    "Система телеуправления (дистанционного управления) применяется главным образом в крылатых ракетах. Она состоит из командной аппаратуры, расположенной на командном пункте управления ракетами, исполнительной аппаратуры, размещенной на борту ракеты, и линии связи между командным пунктоми ракетой в полёте",
    "Автономным называется такое наведение ракеты, которое осуществляется лишь с помощью ее бортовых устройств, без какой-либо связи с наземной аппаратурой и целью. Вся система управления полетом находится на ракете, которая осуществляет полет по программе, рассчитанной на основании координат цели, до старта ракеты",
    "По способу наведения различают самонаводящиеся и телеуправляемые управляемые ракеты. Самонаводящейся называется ракета, на борту которой установлена аппаратура управления ее полетом. Телеуправляемыми называют управляемая ракета (УР), управляемые  наземными средствами управления. По типу боевого заряда различают УР с обычными и ядерными боевыми частями",
    "Сила веса G ракеты направлена вниз к центру Земли и меняется за счет выгорания топлива и изменения ускорения g силы тяжести с высотой. Аэродинамическая сила R действует на ракету лишь при полете в плотных слоях атмосферы. Она зависит от размеров и формы ракеты, скорости и высоты её полёта, а также от величины углов атаки и скольжения",
    "В системах телеуправления передача команд управления с пункта наведения на бортовое устройство управляемой ракеты осуществляется посредством аппаратуры, образующей командную радиолинию управления. Эта линия обеспечивает передачу команд управления полетом ракеты, разовых команд, изменяющих режим работы бортовой аппаратуры",
];

const dataTranslate1 = [
    "Hệ thống điều khiển từ xa được sử dụng chủ yếu trong tên lửa hành trình. Nó bao gồm các thiết bị chỉ huy đặt tại sở chỉ huy tên lửa, thiết bị điều hành đặt trên tên lửa và đường dây liên lạc giữa sở chỉ huy và tên lửa đang bay",
    "Hướng dẫn tự động của tên lửa chỉ được thực hiện với sự trợ giúp của các thiết bị trên tàu, không có bất kỳ liên lạc nào với thiết bị mặt đất và mục tiêu. Toàn bộ hệ thống điều khiển bay được đặt trên tên lửa, thực hiện chuyến bay theo chương trình được tính toán trên cơ sở tọa độ mục tiêu trước khi phóng tên lửa",
    "Theo phương pháp dẫn đường, phân biệt tên lửa dẫn đường tự dẫn và điều khiển từ xa. Tên lửa dẫn đường là một tên lửa trên máy bay được trang bị thiết bị điều khiển bay. Tên lửa điều khiển từ xa là tên lửa dẫn đường (UR) được điều khiển bởi các cơ sở điều khiển trên mặt đất. Theo loại đầu đạn, UR với đầu đạn thông thường và hạt nhân được phân biệt",
    "Lực trọng lượng g của tên lửa được hướng xuống tâm Trái đất và thay đổi do sự đốt cháy nhiên liệu và sự thay đổi gia tốc g trọng lực theo độ cao. Lực khí động học R chỉ tác động lên tên lửa khi bay trong các lớp dày đặc của khí quyển. Nó phụ thuộc vào kích thước và hình dạng của tên lửa, tốc độ và độ cao bay của nó, cũng như kích thước của các góc tấn công và trượt",
    "Trong các hệ thống điều khiển từ xa, việc truyền lệnh điều khiển từ trạm dẫn đường đến thiết bị trên tàu của tên lửa dẫn đường được thực hiện bằng các thiết bị tạo thành đường điều khiển vô tuyến chỉ huy. Dòng này đảm bảo truyền lệnh điều khiển bay tên lửa, lệnh một lần thay đổi chế độ hoạt động của thiết bị trên máy bay",
];

export { dataQuestion1, dataTranslate1, data };
