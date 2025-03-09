const path = require('path');

// Shared configuration for all components
const sharedConfig = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],       
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

// Configuration for the Counter component
const counterConfig = {
    ...sharedConfig,
    entry: './src/entries/counter.ts',
    output: {
        filename: 'counter_bundle.js',
        path: path.resolve(__dirname, 'dist/components'),
        library: {
            name: 'CounterComponent',
            type: 'window'
        }
    },
};

// Configuration for the StatusesDashboard component
const dashboardConfig = {
    ...sharedConfig,
    entry: './src/entries/statuses-dashboard.ts',
    output: {
        filename: 'dashboard_bundle.js',
        path: path.resolve(__dirname, 'dist/components'),
        library: {
            name: 'StatusesDashboardComponent',
            type: 'window'
        }
    }
};

// Export as an array of configurations
module.exports = [counterConfig, dashboardConfig];