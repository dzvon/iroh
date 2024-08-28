searchState.loadedDescShard("iroh_metrics", 0, "Metrics library for iroh\nExpose core types and traits\nIncrement the given counter by 1.\nIncrement the given counter <code>n</code>.\nMetrics collection\nParse Prometheus metrics from a string.\nReport usage statistics to the configured endpoint.\nSet the given counter to <code>n</code>.\nReexport to make matching versions easier.\nCore is the base metrics struct. It manages the mapping …\nOpen Metrics <code>Counter</code> to measure discrete events.\nInterface for all distribution based metrics.\nDescription of a group of metrics.\nInterface for all single value based metrics.\nExposes a simple API to report usage statistics.\nType alias for a metered resource.\nUsage statistics report.\nIdentifier of the user consuming the resource.\nPublic key of the user consuming the resource.\nThe actual prometheus counter.\nWhat this counter measures.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the core metrics.\nGet the current value of the <code>Counter</code>.\nReturns a reference to the mapped metrics instance.\nIncrease the <code>Counter</code> by 1, returning the previous value.\nIncrease the <code>Counter</code> by <code>u64</code>, returning the previous value.\nMust only be called once to init metrics.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe name of this metric group.\nReturns the name of the metric\nReturns the name of the metric\nInitializes this metric group.\nConstructs a new counter, based on the given <code>description</code>.\nCreates a new usage reporter.\nCreates a new usage stats report.\nReturns a reference to the prometheus registry.\nReports usage statistics to the configured endpoint.\nThe resource being consumed.\nReference to the resource reporter.\nSet the <code>Counter</code> value. Warning: this is not default …\nThe timestamp of the report.\nAttempts to get the current metric from the global …\nTrieds to init the metrics.\nThe value of the resource being consumed.\nAccess to this metrics group to record a metric. Only …\nStart a metrics dumper service.\nStart a server to serve the OpenMetrics endpoint.")