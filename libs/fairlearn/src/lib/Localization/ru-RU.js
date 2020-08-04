module.exports = {
    loremIpsum:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    defaultClassNames: "Класс {0}",
    defaultFeatureNames: "Чувствительный признак {0}",
    defaultSingleFeatureName: "Чувствительный признак",
    defaultCustomMetricName: "Настраиваемая метрика {0}",
    accuracyTab: "Достоверность по производительности",
    opportunityTab: "Достоверность по возможностям",
    modelComparisonTab: "Сравнение моделей",
    tableTab: "Подробное представление",
    dataSpecifications: "Статистика данных",
    attributes: "Атрибуты",
    singleAttributeCount: "1 чувствительный признак",
    attributesCount: "Чувствительные признаки: {0}",
    instanceCount: "Экземпляров: {0}",
    close: "Закрыть",
    calculating: "Вычисление…",
    accuracyMetric: "Метрика производительности",
    errorOnInputs:
        "Ошибка ввода. Чувствительные признаки сейчас должны быть категориальными значениями. Назначьте значения категориям интервалов и повторите попытку.",
    Accuracy: {
        header: "Как вы хотите измерять производительность?",
        modelMakes: "модель делает",
        modelsMake: "модели делают",
        body:
            "Ваши данные содержат {0} метки, а {1} прогнозы ({2}). На основе этих сведений мы рекомендуем использовать следующие метрики. Выберите одну метрику из списка.",
        binaryClassifier: "двоичный классификатор",
        probabalisticRegressor: "пробит-регрессор",
        regressor: "регрессор",
        binary: "двоичные",
        continuous: "непрерывные",
    },
    Parity: {
        header: "Измерение достоверности через несоответствие",
        body:
            "Метрики несоответствия количественно характеризуют отличия в поведении модели по выбранным признакам. Доступны два вида метрик, но будут добавлены и другие…",
    },
    Header: {
        title: "Fairlearn",
        documentation: "Документация",
    },
    Footer: {
        back: "Назад",
        next: "Далее",
    },
    Intro: {
        welcome: "Вас приветствует",
        fairlearnDashboard: "Панель мониторинга Fairlearn",
        introBody:
            "Панель мониторинга Fairlearn позволяет оценивать компромисс между производительностью и достоверностью моделей.",
        explanatoryStep:
            "Чтобы настроить оценку, необходимо указать чувствительный признак и метрику производительности.",
        getStarted: "Начало работы",
        features: "Чувствительные признаки",
        featuresInfo:
            "Чувствительные признаки используются для разделения данных на группы. Достоверность вашей модели в этих группах измеряется с помощью метрик несоответствия, которые количественно показывают различия в ее поведении в разных группах.",
        accuracy: "Метрика производительности",
        accuracyInfo:
            "Метрики производительности используются для оценки общего качества модели, а также качества модели в каждой группе. Различие между крайними значениями метрики в группах представляется как несоответствие в работе.",
    },
    ModelComparison: {
        title: "Сравнение моделей",
        howToRead: "Как читать эту диаграмму",
        lower: "ниже",
        higher: "выше",
        howToReadText:
            "На этой диаграмме каждая из моделей ({0}) представляет собой точку для выбора. Ось X представляет функцию \"{1}\" (чем {2}, тем лучше), а ось Y характеризует несоответствие (чем ниже, тем лучше).",
        insights: "Аналитика",
        insightsText1: "Диаграмма показывает функцию \"{0}\" и несоответствие моделей ({1}).",
        insightsText2: "Функция \"{0}\" имеет диапазон от {1} до {2}, а несоответствие — от {3} до {4}.",
        insightsText3:
            "Самая правильная модель обеспечивает для функции \"{0}\" значение {1} и имеет несоответствие {2}.",
        insightsText4:
            "Модель с наименьшим несоответствием обеспечивает для функции \"{0}\" значение {1} и имеет несоответствие {2}.",
        disparityInOutcomes: "Несоответствие прогнозов",
        disparityInAccuracy: "Несоответствие в {0}",
        howToMeasureDisparity: "Как измерять несоответствие?",
    },
    Report: {
        modelName: "Модель {0}",
        title: "Несоответствие производительности",
        globalAccuracyText: "Общее значение для \"{0}\"",
        accuracyDisparityText: "Является несоответствием в функции \"{0}\"",
        editConfiguration: "Изменить конфигурацию",
        backToComparisons: "Многомодельное представление",
        outcomesTitle: "Несоответствие прогнозов",
        minTag: "Мин.",
        maxTag: "Макс.",
        groupLabel: "Подгруппа",
        underestimationError: "Преуменьшение прогноза",
        underpredictionExplanation: "(прогноз = 0, истина = 1)",
        overpredictionExplanation: "(прогноз = 1, истина = 0)",
        overestimationError: "Преувеличение прогноза",
        classificationOutcomesHowToRead:
            "Линейчатая диаграмма показывает степень отбора в каждой группе, то есть долю точек с классификацией 1.",
        regressionOutcomesHowToRead:
            "Блочные диаграммы показывают распределение прогнозов в каждой группе. Сверху наложены отдельные точки данных.",
        classificationAccuracyHowToRead1: "Линейчатая диаграмма показывает распределение ошибок в каждой группе.",
        classificationAccuracyHowToRead2:
            "Ошибки разделяются на ошибки преувеличения прогноза (прогнозирование значения 1, когда истинная метка — 0) и преуменьшения прогноза (прогнозирование 0, когда истинная метка — 1).",
        classificationAccuracyHowToRead3:
            "Выдаваемые показатели получаются делением числа ошибок на общий размер группы.",
        probabilityAccuracyHowToRead1:
            "Линейчатая диаграмма показывает среднюю абсолютную ошибку в каждой группе с подразделением на преуменьшение и преуменьшение прогноза.",
        probabilityAccuracyHowToRead2:
            "В каждом примере мы измеряем разницу между прогнозом и меткой. Если разница положительная, это называется преувеличением прогноза, а если отрицательная — преуменьшением.",
        probabilityAccuracyHowToRead3:
            "Мы сообщаем сумму ошибок преувеличения прогноза и сумму ошибок преуменьшения, деленные на общий размер группы.",
        regressionAccuracyHowToRead:
            "Ошибка представляет собой разницу между прогнозом и меткой. Блочные диаграммы показывают распределение ошибок в каждой группе. Сверху наложены отдельные точки данных.",
        distributionOfPredictions: "Распределение прогнозов",
        distributionOfErrors: "Распределение ошибок",
        tooltipPrediction: "Прогноз: {0}",
        tooltipError: "Ошибка: {0}",
    },
    Feature: {
        header: "Для каких признаков вы хотите оценить достоверность модели?",
        body:
            "Достоверность оценивается с точки зрения несоответствий в поведении модели. Мы разделим ваши данные по значениям каждого выбранного признака и оценим, насколько метрики производительности и прогнозы вашей модели различаются в этих группах.",
        learnMore: "Дополнительные сведения",
        summaryCategoricalCount: "Уникальных значений признака: {0}",
        summaryNumericCount:
            "Этот числовой признак имеет диапазон от {0} до {1} и группируется в следующее число интервалов: {2}.",
        showCategories: "Показать все",
        hideCategories: "Свернуть",
        categoriesOverflow: " и другие категории ({0})",
        editBinning: "Изменить группы",
        subgroups: "Подгруппы",
    },
    Metrics: {
        accuracyScore: "Правильность",
        precisionScore: "Точность",
        recallScore: "Полнота",
        zeroOneLoss: "Двоичная функция потерь",
        specificityScore: "Оценка специфичности",
        missRate: "Доля промахов",
        falloutRate: "Доля ложных заключений",
        maxError: "Максимальная ошибка",
        meanAbsoluteError: "Средняя абсолютная ошибка",
        meanSquaredError: " Среднеквадратичная ошибка",
        meanSquaredLogError: "Среднеквадратичная ошибка журнала",
        medianAbsoluteError: "Медианная абсолютная ошибка",
        average: "Средний прогноз",
        selectionRate: "Степень отбора",
        overprediction: "Преувеличение прогноза",
        underprediction: "Преуменьшение прогноза",
        r2_score: "Оценка \"R-квадрат\"",
        rms_error: "Среднеквадратичная ошибка (корень)",
        auc: "Площадь под ROC-кривой",
        balancedRootMeanSquaredError: "Сбалансированная среднеквадратичная ошибка",
        balancedAccuracy: "Сбалансированная правильность",
        f1Score: "F1-Score",
        logLoss: "Log Loss",
        accuracyDescription: "Доля точек данных с корректной классификацией.",
        precisionDescription: "Доля точек данных с корректной классификацией среди тех, что классифицированы как 1.",
        recallDescription:
            "Доля точек данных с корректной классификацией среди тех, чья истинная метка — 1. Другие названия: доля истинноположительных результатов, чувствительность.",
        rmseDescription: "Квадратный корень среднего значения из квадратов ошибки.",
        mseDescription: "Среднее значение из квадратов ошибки.",
        meanAbsoluteErrorDescription:
            "Среднее число абсолютных величин ошибки. Больше подходит для крайних значений, чем для среднеквадратичной ошибки.",
        r2Description: "Доля изменчивости в метках, объясняемая моделью.",
        aucDescription:
            "Качество (числовые оценки) прогнозов на основе отделения положительных примеров от отрицательных.",
        balancedRMSEDescription:
            "Переназначение весов для положительных и отрицательных примеров так, чтобы общий вес совпадал. Рекомендуется для сильно несбалансированных данных.",
        balancedAccuracyDescription:
            "Переназначение весов для положительных и отрицательных примеров так, чтобы общий вес совпадал. Рекомендуется для сильно несбалансированных данных.",
        f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall.",
    },
    BinDialog: {
        header: "Настройка интервалов",
        makeCategorical: "Рассматривать как категориальные",
        save: "Сохранить",
        cancel: "Отмена",
        numberOfBins: "Число интервалов:",
        categoryHeader: "Значения интервалов:",
    },
};
