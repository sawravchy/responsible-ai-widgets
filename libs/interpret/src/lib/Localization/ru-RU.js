module.exports = {
    selectPoint: "Выберите точку, чтобы просмотреть объяснение ее локальной важности.",
    defaultClassNames: "Класс {0}",
    defaultFeatureNames: "Функция {0}",
    absoluteAverage: "Среднее абсолютного значения",
    predictedClass: "Прогнозируемый класс",
    datasetExplorer: "Обозреватель наборов данных",
    dataExploration: "Исследование набора данных",
    aggregateFeatureImportance: "Совокупная важность признаков",
    globalImportance: "Глобальный уровень важности",
    explanationExploration: "Изучение объяснения",
    individualAndWhatIf: "Важность отдельных признаков и гипотетические результаты",
    summaryImportance: "Суммарная важность",
    featureImportance: "Важность признака",
    featureImportanceOf: "Важность признака {0}",
    perturbationExploration: "Исследование изменений",
    localFeatureImportance: "Локальная важность признака",
    ice: "ICE",
    clearSelection: "Очистить выделение",
    feature: "Компонент:",
    intercept: "Отсекаемый отрезок",
    modelPerformance: "Производительность модели",
    ExplanationScatter: {
        dataLabel: "Данные: {0}",
        importanceLabel: "Важность: {0}",
        predictedY: "Прогнозируемое значение Y",
        index: "Индекс",
        dataGroupLabel: "Данные",
        output: "Вывод",
        probabilityLabel: "Вероятность: {0}",
        trueY: "Истинное значение Y",
        class: "класс: ",
        xValue: "Значение X:",
        yValue: "Значение Y:",
        colorValue: "Цвет:",
        count: "Количество",
    },
    CrossClass: {
        label: "Взвешивание между классами:",
        info: "Сведения о многоклассовых вычислениях",
        overviewInfo:
            "Многоклассовые модели создают независимый вектор важности признаков для каждого класса. Этот вектор показывает, какие из признаков делают класс более или менее вероятным. Вы можете выбрать, каким образом веса векторов важности признаков для каждого класса сводятся к одному значению:",
        absoluteValInfo:
            "Среднее абсолютного значения: отображает сумму значений важности функции во всех возможных классах, разделенную на число классов.",
        predictedClassInfo:
            "Прогнозируемый класс: отображает значение важности признака для прогнозируемого класса заданной точки.",
        enumeratedClassInfo:
            "Имена перечислимых классов: отображает только значения важности признаков указанного класса во всех точках данных.",
        close: "Закрыть",
        crossClassWeights: "Межклассовые весовые коэффициенты",
    },
    AggregateImportance: {
        scaledFeatureValue: "Масштабированное значение функции",
        low: "Низкий",
        high: "Высокий",
        featureLabel: "Функция: {0}",
        valueLabel: "Значение функции: {0}",
        importanceLabel: "Важность: {0}",
        predictedClassTooltip: "Прогнозируемый класс: {0}",
        trueClassTooltip: "Истинный класс: {0}",
        predictedOutputTooltip: "Прогнозируемые выходные данные: {0}",
        trueOutputTooltip: "Истинные выходные данные: {0}",
        topKFeatures: "K самых важных функций:",
        topKInfo: "Как вычисляются первые k позиций",
        predictedValue: "Предсказанное значение",
        predictedClass: "Прогнозируемый класс",
        trueValue: "Истина",
        trueClass: "Истинный класс",
        noColor: "Нет",
        tooManyRows: "Размер указанного набора данных превышает значение, поддерживаемое этой диаграммой.",
    },
    BarChart: {
        classLabel: "Класс: {0}",
        sortBy: "Сортировать по",
        noData: "Нет данных",
        absoluteGlobal: "Абсолютное значение глобальной важности",
        absoluteLocal: "Абсолютное значение локальной важности",
        calculatingExplanation: "Объяснение расчета",
    },
    IcePlot: {
        numericError: "Значение должно быть числовым.",
        integerError: "Требуется целое число.",
        prediction: "Прогноз",
        predictedProbability: "Прогнозируемая вероятность",
        predictionLabel: "Прогноз: {0}",
        probabilityLabel: "Вероятность: {0}",
        noModelError:
            "Укажите модель, генерирующую прогнозы на основе введенных данных, для исследования прогнозов на графиках ICE.",
        featurePickerLabel: "Компонент:",
        minimumInputLabel: "Минимум:",
        maximumInputLabel: "Максимум:",
        stepInputLabel: "Этапы:",
        loadingMessage: "Идет загрузка данных...",
        submitPrompt: "Отправьте диапазон для просмотра графика ICE",
        topLevelErrorMessage: "Ошибка в параметре",
        errorPrefix: "Возникла ошибка: {0}",
    },
    PerturbationExploration: {
        loadingMessage: "Загрузка...",
        perturbationLabel: "Изменение:",
    },
    PredictionLabel: {
        predictedValueLabel: "Прогнозируемое значение: {0}",
        predictedClassLabel: "Прогнозируемый класс: {0}",
    },
    Violin: {
        groupNone: "Без группирования",
        groupPredicted: "Прогнозируемое значение Y",
        groupTrue: "Истинное значение Y",
        groupBy: "Группировать по",
    },
    FeatureImportanceWrapper: {
        chartType: "Тип диаграммы:",
        violinText: "Скрипка",
        barText: "Линейчатая",
        boxText: "Рамка",
        beehiveText: "Swarm",
        globalImportanceExplanation:
            "Глобальная важность признака вычисляется путем усреднения абсолютного значения важности признака по всем точкам (нормализация L1). ",
        multiclassImportanceAddendum:
            "В вычисление важности функции для всех классов включены все точки, поэтому разностное взвешивание не используется. Таким образом, функция, имеющая большее отрицательное значение важности для многих точек и предсказанная как не являющаяся функцией класса А, значительно увеличит уровень важности функции класса А.",
    },
    Filters: {
        equalComparison: "Равно",
        greaterThanComparison: "Больше",
        greaterThanEqualToComparison: "Больше или равно",
        lessThanComparison: "Меньше",
        lessThanEqualToComparison: "Меньше или равно",
        inTheRangeOf: "В диапазоне",
        categoricalIncludeValues: "Включенные значения:",
        numericValue: "Значение",
        numericalComparison: "Операция",
        minimum: "Минимум",
        maximum: "Максимум",
        min: "Мин.: {0}",
        max: "Макс.: {0}",
        uniqueValues: "Число уникальных значений: {0}",
    },
    Columns: {
        regressionError: "Ошибка регрессии",
        error: "Ошибка",
        classificationOutcome: "Результат классификации",
        truePositive: "Истинноположительный результат",
        trueNegative: "Истинноотрицательный результат",
        falsePositive: "Ложноположительный результат",
        falseNegative: "Ложноотрицательный результат",
        dataset: "Набор данных",
        predictedProbabilities: "Прогнозируемые вероятности",
        none: "Количество",
    },
    WhatIf: {
        closeAriaLabel: "Закрыть",
        defaultCustomRootName: "Копия строки {0}",
        filterFeaturePlaceholder: "Поиск признаков",
    },
    Cohort: {
        cohort: "Когорта",
        defaultLabel: "Все данные",
    },
    GlobalTab: {
        helperText:
            "Изучите первые k важных признаков, влияющих на общие прогнозы по вашей модели (это также называется \"глобальным объяснением\"). Используйте ползунок для отображения важности признаков в порядке убывания. Выберите когорты (не более трех), чтобы просмотреть важность их признаков одновременно. Щелкните столбец с любым из признаков на графике, чтобы увидеть, как значения выбранного признака влияют на прогноз модели.",
        topAtoB: "Первые признаки ({1}–{0})",
        datasetCohorts: "Когорты наборов данных",
        legendHelpText: "Щелкайте элементы условных обозначений для включения или отключения когорт на графике.",
        sortBy: "Метод сортировки",
        viewDependencePlotFor: "Показать график зависимостей для:",
        datasetCohortSelector: "Выберите когорту набора данных",
        aggregateFeatureImportance: "Совокупная важность признаков",
        missingParameters: "На этой вкладке требуется указать параметр локальной важности признака.",
        weightOptions: "Весовые коэффициенты важности класса",
        dependencePlotTitle: "Графики зависимостей",
        dependencePlotHelperText:
            "Эта график зависимости отражает связь между значением признака и соответствующим значением важности признака в когорте.",
        dependencePlotFeatureSelectPlaceholder: "Выберите признак",
        datasetRequired:
            "Для построения графиков зависимостей требуется набор данных для оценки и массив локальных значений важности признаков.",
    },
    CohortBanner: {
        dataStatistics: "Статистика данных",
        datapoints: "Точек данных: {0}",
        features: "Признаков: {0}",
        filters: "Фильтров: {0}",
        binaryClassifier: "Двоичный классификатор",
        regressor: "Регрессор",
        multiclassClassifier: "Многоклассовый классификатор",
        datasetCohorts: "Когорты набора данных",
        editCohort: "Изменить когорту",
        duplicateCohort: "Дублировать когорту",
        addCohort: "Добавить когорту",
        copy: " (копия)",
    },
    ModelPerformance: {
        helperText:
            "Оцените производительность вашей модели, изучив распределение значений прогнозирования и значений ее метрик производительности. Для дальнейшего изучения вы можете просмотреть сравнительный анализ производительности модели по различным когортам или подгруппам своего набора данных. Выберите фильтры для значений X и Y, чтобы рассмотреть различные измерения. Значок шестеренки на графе позволяет изменить тип графа.",
        modelStatistics: "Статистика модели",
        cohortPickerLabel: "Выберите когорту набора данных для изучения",
        missingParameters: "На этой вкладке требуется указать массив прогнозируемых значений из модели.",
        missingTrueY:
            "Для получения статистики по производительности модели, помимо прогнозируемых результатов, требуется указать истинные результаты.",
    },
    Charts: {
        yValue: "Значение Y",
        numberOfDatapoints: "Число точек данных",
        xValue: "Значение X",
        rowIndex: "Индекс строки",
        featureImportance: "Важность функции",
        countTooltipPrefix: "Количество: {0}",
        count: "Количество",
        featurePrefix: "Функция",
        importancePrefix: "Важность",
        cohort: "Когорта",
        howToRead: "Как читать эту диаграмму",
    },
    DatasetExplorer: {
        helperText:
            "Изучайте статистику для набора данных, выбирая различные фильтры для осей X, Y и оси цвета, чтобы разделить данные по разным измерениям. Создавайте когорты наборов данных, чтобы анализировать статистику для набора данных с помощью фильтров, таких как спрогнозированный результат, признаки набора данных и группы ошибок. Чтобы изменить тип диаграммы, используйте значок шестеренки в верхнем правом углу графика.",
        colorValue: "Цвет значения",
        individualDatapoints: "Отдельные точки данных",
        aggregatePlots: "Агрегировать графики",
        chartType: "Тип диаграммы",
        missingParameters: "На этой вкладке требуется указать набор данных для оценки.",
        noColor: "Нет",
    },
    DependencePlot: {
        featureImportanceOf: "Важность признака",
        placeholder: "Щелкните признак на линейчатой диаграмме выше для отображения графика его зависимостей",
    },
    WhatIfTab: {
        helperText:
            "Вы можете выбрать точку данных, щелкнув диаграмму рассеяния, и просмотреть локальные значения важности признаков (локальное объяснение) и график индивидуального условного математического ожидания (ICE) ниже. Создайте гипотетическую точку данных \"что если\", используя панель справа, чтобы внести отклонения в признаки известной точки данных. Значения важности признаков основаны на многочисленных приближениях и не являются \"причинами\" прогнозов. Если причинный вывод не обладает строгой математической корректностью, мы не рекомендуем пользователям принимать реальные решения на основе этого инструмента.",
        panelPlaceholder: "Для создания прогнозов для новых точек данных необходима модель.",
        cohortPickerLabel: "Выберите когорту набора данных для изучения",
        scatterLegendText:
            "Щелкайте элементы условных обозначений для включения или отключения точек данных на графике.",
        realPoint: "Реальные точки данных",
        noneSelectedYet: "Пока ничего не выбрано",
        whatIfDatapoints: "Гипотетические точки данных",
        noneCreatedYet: "Пока ничего не создано",
        showLabel: "Показать:",
        featureImportancePlot: "График важности признаков",
        icePlot: "График индивидуального условного ожидания (ICE)",
        featureImportanceLackingParameters:
            "Укажите важность локальных признаков, чтобы узнать, как каждый из них влияет на отдельные прогнозы.",
        featureImportanceGetStartedText: "Выберите точку для просмотра важности признака",
        iceLackingParameters:
            "Для создания прогнозов для гипотетических точек данных в графиках ICE требуется активированная модель.",
        IceGetStartedText: "Выберите точку или создайте гипотетическую точку для отображения графиков ICE",
        whatIfDatapoint: "Гипотетическая точка данных",
        whatIfHelpText:
            "Выберите точку на графике или вручную введите известный индекс точки данных для воздействия и сохраните ее как новую гипотетическую точку.",
        indexLabel: "Индекс данных для воздействия",
        rowLabel: "Строка {0}",
        whatIfNameLabel: "Имя гипотетической точки данных",
        featureValues: "Значения признаков",
        predictedClass: "Спрогнозированный класс: ",
        predictedValue: "Спрогнозированное значение: ",
        probability: "Вероятность: ",
        trueClass: "Истинный класс: ",
        trueValue: "Истинное значение: ",
        "trueValue.comment": "Префикс к фактической метке регрессии",
        newPredictedClass: "Новый спрогнозированный класс: ",
        newPredictedValue: "Новое спрогнозированное значение: ",
        newProbability: "Новая вероятность: ",
        saveAsNewPoint: "Сохранить как новую точку",
        saveChanges: "Сохранить изменения",
        loading: "Загрузка…",
        classLabel: "Класс: {0}",
        minLabel: "Мин.",
        maxLabel: "Макс.",
        stepsLabel: "Число шагов",
        disclaimer:
            "Отказ от ответственности. Приведенные здесь пояснения основаны на многочисленных аппроксимациях и не являются \"причиной\" прогнозов. Этот инструмент не предоставляет математически обоснованный причинно-следственный вывод, поэтому мы не рекомендуем пользователям принимать на его основе решения в реальных ситуациях.",
        missingParameters: "На этой вкладке требуется указать набор данных для оценки.",
        selectionLimit: "Можно выбрать не более 3 точек.",
        classPickerLabel: "Класс",
        tooltipTitleMany: "Основные спрогнозированные классы ({0})",
        whatIfTooltipTitle: "Спрогнозированные классы \"Что если\"",
        tooltipTitleFew: "Спрогнозированные классы",
        probabilityLabel: "Вероятность",
        deltaLabel: "Различие",
        nonNumericValue: "Значение должно быть числовым.",
        icePlotHelperText:
            "Графики ICE показывают, как значения прогнозирования для выбранной точки данных изменяются вдоль диапазона значений признаков между минимальным и максимальным значениями.",
    },
    CohortEditor: {
        selectFilter: "Выберите фильтр",
        TreatAsCategorical: "Рассматривать как категориальные",
        addFilter: "Добавить фильтр",
        addedFilters: "Добавленные фильтры",
        noAddedFilters: "Фильтры пока не добавлены",
        defaultFilterState: "Выберите фильтр, чтобы добавить параметры в когорту набора данных.",
        cohortNameLabel: "Имя когорты набора данных",
        cohortNamePlaceholder: "Присвойте когорте имя",
        save: "Сохранить",
        delete: "Удалить",
        cancel: "Отмена",
        cohortNameError: "Отсутствует имя когорты.",
        placeholderName: "Когорта {0}",
    },
    AxisConfigDialog: {
        select: "Выберите",
        ditherLabel: "Размывание значений",
        selectFilter: "Выберите значение по оси",
        selectFeature: "Выберите признак",
        binLabel: "Применить группирование к данным",
        TreatAsCategorical: "Рассматривать как категориальные",
        numOfBins: "Число групп",
        groupByCohort: "Группировать по когорте",
        selectClass: "Выбор класса",
        countHelperText: "Гистограмма количества точек",
    },
    ValidationErrors: {
        predictedProbability: "Прогнозируемая вероятность",
        predictedY: "Прогнозируемое значение Y",
        evalData: "Набор данных для оценки",
        localFeatureImportance: "Локальная важность признака",
        inconsistentDimensions: "Несогласованные размеры. {0} имеет следующие размеры: {1}, ожидается: {2}",
        notNonEmpty: "Входные данные {0} не являются непустым массивом.",
        varyingLength: "Несогласованные размеры. {0} содержит элементы различной длины.",
        notArray: "{0} не является массивом. Ожидается массив с размерностью {1}.",
        errorHeader: "Некоторые входные параметры оказались несогласованными и не будут использоваться: ",
        datasizeWarning:
            "Анализируемый набор данных слишком велик для отображения на некоторых диаграммах. Добавьте фильтры, чтобы уменьшить размер когорты. ",
        datasizeError: "Выбранная когорта слишком велика. Добавьте фильтры, чтобы уменьшить размер когорты.",
        addFilters: "Добавьте фильтры",
    },
    FilterOperations: {
        equals: " = {0}",
        lessThan: " < {0}",
        greaterThan: " > {0}",
        lessThanEquals: " <= {0}",
        greaterThanEquals: " >= {0}",
        includes: " включает {0} ",
        inTheRangeOf: "[ {0} ]",
        overflowFilterArgs: "{0} и {1} других",
    },
    Statistics: {
        mse: "Среднеквадратичная ошибка: {0}",
        rSquared: "R-квадрат: {0}",
        meanPrediction: "Средний прогноз {0}",
        accuracy: "Правильность: {0}",
        precision: "Точность: {0}",
        recall: "Полнота: {0}",
        fpr: "Ложноположительные: {0}",
        fnr: "Ложноотрицательные: {0}",
    },
    GlobalOnlyChart: {
        helperText:
            "Изучите первые k важных функций, влияющих на общие прогнозы по вашей модели. Используйте ползунок для отображения важности признаков в порядке убывания.",
    },
    ExplanationSummary: {
        whatDoExplanationsMean: "Что означают эти пояснения?",
        clickHere: "Дополнительные сведения",
        shapTitle: "Значения Шепли",
        shapDescription:
            "Этот модуль объяснения использует подход SHAP, который представляет собой теоретико-игровой подход для объяснения моделей, в котором важность наборов признаков измеряется путем \"скрытия\" этих признаков из модели с помощью маргинализации. Для получения дополнительных сведений перейдите по ссылке ниже.",
        limeTitle: "LIME (локально интерпретируемое объяснение, которое не зависит от модели)",
        limeDescription:
            "Этот модуль объяснения использует LIME, что обеспечивает линейное приближение модели. Чтобы получить объяснение, мы выполняем следующие действия: вносим отклонения в экземпляр, получаем прогнозы модели и используем эти прогнозы в качестве меток для изучения разреженной линейной модели, которая является локально достоверной. Весовые коэффициенты этой линейной модели используются в качестве значений \"важности признаков\". Для получения дополнительных сведений перейдите по ссылке ниже.",
        mimicTitle: "Имитация (глобальные суррогатные объяснения)",
        mimicDescription:
            "В основе этого модуля объяснения лежит идея обучения глобальных суррогатных моделей для имитации моделей черного ящика. Глобальная суррогатная модель — это внутренняя интерпретируемая модель, которая обучается для как можно более точного приближения прогнозов всех моделей черного ящика. Значения важности признаков — это значения важности признаков на основе модели для базовой суррогатной модели (LightGBM, линейная регрессия, стохастический градиентный спуск или дерево решений)",
        pfiTitle: "Важность признаков, определяемая путем перестановок (PFI)",
        pfiDescription:
            "Этот модуль объяснения случайным образом перемешивает данные во всем наборе данных по одному признаку за раз и вычисляет изменение метрики производительности для интереса (метрики производительности по умолчанию: F1 для двоичной классификации, оценка F1 с микроусреднением для многоклассовой классификации и средняя абсолютная погрешность для регрессии). Чем больше это изменение, тем важнее признак. Этот модуль объяснения может объяснить только общее поведение базовой модели, но не отдельные прогнозы. Значение важности признака представляет собой разницу в производительности модели, измеренную путем внесения отклонений в этот конкретный признак.",
    },
};
